"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteInput = exports.Site = void 0;
var utils_1 = require("../../../internal/utils");
var basicauth_1 = require("./basicauth");
var changedby_1 = require("./changedby");
var cookies_1 = require("./cookies");
var formlogin_1 = require("./formlogin");
var headers_1 = require("./headers");
var verificationmethodenum_1 = require("./verificationmethodenum");
// Site
/**
 * Main resource associated with a target
**/
var Site = /** @class */ (function (_super) {
    __extends(Site, _super);
    function Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic_auth" }),
        __metadata("design:type", basicauth_1.BasicAuth)
    ], Site.prototype, "basicAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changed" }),
        __metadata("design:type", Date)
    ], Site.prototype, "changed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changed_by" }),
        __metadata("design:type", changedby_1.ChangedBy)
    ], Site.prototype, "changedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies", elemType: cookies_1.Cookies }),
        __metadata("design:type", Array)
    ], Site.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], Site.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_login", elemType: formlogin_1.FormLogin }),
        __metadata("design:type", Array)
    ], Site.prototype, "formLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_login_check_pattern" }),
        __metadata("design:type", String)
    ], Site.prototype, "formLoginCheckPattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_login_url" }),
        __metadata("design:type", String)
    ], Site.prototype, "formLoginUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_basic_auth" }),
        __metadata("design:type", Boolean)
    ], Site.prototype, "hasBasicAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_form_login" }),
        __metadata("design:type", Boolean)
    ], Site.prototype, "hasFormLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: headers_1.Headers }),
        __metadata("design:type", Array)
    ], Site.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], Site.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Site.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Site.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stack" }),
        __metadata("design:type", Array)
    ], Site.prototype, "stack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Site.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_date" }),
        __metadata("design:type", Date)
    ], Site.prototype, "verificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_last_error" }),
        __metadata("design:type", String)
    ], Site.prototype, "verificationLastError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_method" }),
        __metadata("design:type", String)
    ], Site.prototype, "verificationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification_token" }),
        __metadata("design:type", String)
    ], Site.prototype, "verificationToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], Site.prototype, "verified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelist" }),
        __metadata("design:type", Array)
    ], Site.prototype, "whitelist", void 0);
    return Site;
}(utils_1.SpeakeasyBase));
exports.Site = Site;
// SiteInput
/**
 * Main resource associated with a target
**/
var SiteInput = /** @class */ (function (_super) {
    __extends(SiteInput, _super);
    function SiteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic_auth" }),
        __metadata("design:type", basicauth_1.BasicAuth)
    ], SiteInput.prototype, "basicAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cookies", elemType: cookies_1.Cookies }),
        __metadata("design:type", Array)
    ], SiteInput.prototype, "cookies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], SiteInput.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_login", elemType: formlogin_1.FormLogin }),
        __metadata("design:type", Array)
    ], SiteInput.prototype, "formLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_login_check_pattern" }),
        __metadata("design:type", String)
    ], SiteInput.prototype, "formLoginCheckPattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_login_url" }),
        __metadata("design:type", String)
    ], SiteInput.prototype, "formLoginUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_basic_auth" }),
        __metadata("design:type", Boolean)
    ], SiteInput.prototype, "hasBasicAuth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_form_login" }),
        __metadata("design:type", Boolean)
    ], SiteInput.prototype, "hasFormLogin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: headers_1.Headers }),
        __metadata("design:type", Array)
    ], SiteInput.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SiteInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SiteInput.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=whitelist" }),
        __metadata("design:type", Array)
    ], SiteInput.prototype, "whitelist", void 0);
    return SiteInput;
}(utils_1.SpeakeasyBase));
exports.SiteInput = SiteInput;
