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
exports.Security = exports.SchemeQueryApiKey = exports.SchemeHeaderApiKey = exports.SchemeCookieSid = void 0;
var utils_1 = require("../../../internal/utils");
var SchemeCookieSid = /** @class */ (function (_super) {
    __extends(SchemeCookieSid, _super);
    function SchemeCookieSid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=brain.sid" }),
        __metadata("design:type", String)
    ], SchemeCookieSid.prototype, "apiKey", void 0);
    return SchemeCookieSid;
}(utils_1.SpeakeasyBase));
exports.SchemeCookieSid = SchemeCookieSid;
var SchemeHeaderApiKey = /** @class */ (function (_super) {
    __extends(SchemeHeaderApiKey, _super);
    function SchemeHeaderApiKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=X-Api-Key" }),
        __metadata("design:type", String)
    ], SchemeHeaderApiKey.prototype, "apiKey", void 0);
    return SchemeHeaderApiKey;
}(utils_1.SpeakeasyBase));
exports.SchemeHeaderApiKey = SchemeHeaderApiKey;
var SchemeQueryApiKey = /** @class */ (function (_super) {
    __extends(SchemeQueryApiKey, _super);
    function SchemeQueryApiKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=key" }),
        __metadata("design:type", String)
    ], SchemeQueryApiKey.prototype, "apiKey", void 0);
    return SchemeQueryApiKey;
}(utils_1.SpeakeasyBase));
exports.SchemeQueryApiKey = SchemeQueryApiKey;
var Security = /** @class */ (function (_super) {
    __extends(Security, _super);
    function Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=cookie" }),
        __metadata("design:type", SchemeCookieSid)
    ], Security.prototype, "cookieSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", SchemeHeaderApiKey)
    ], Security.prototype, "headerApiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", SchemeQueryApiKey)
    ], Security.prototype, "queryApiKey", void 0);
    return Security;
}(utils_1.SpeakeasyBase));
exports.Security = Security;
