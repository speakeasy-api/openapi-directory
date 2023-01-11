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
exports.UserAgentInfoResponse = void 0;
var utils_1 = require("../../../internal/utils");
var UserAgentInfoResponse = /** @class */ (function (_super) {
    __extends(UserAgentInfoResponse, _super);
    function UserAgentInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=browserName" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "browserName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=engineVersion" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isAndroid" }),
        __metadata("design:type", Boolean)
    ], UserAgentInfoResponse.prototype, "isAndroid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isIos" }),
        __metadata("design:type", Boolean)
    ], UserAgentInfoResponse.prototype, "isIos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isMobile" }),
        __metadata("design:type", Boolean)
    ], UserAgentInfoResponse.prototype, "isMobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileBrand" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "mobileBrand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileBrowser" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "mobileBrowser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileModel" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "mobileModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileScreenHeight" }),
        __metadata("design:type", Number)
    ], UserAgentInfoResponse.prototype, "mobileScreenHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileScreenWidth" }),
        __metadata("design:type", Number)
    ], UserAgentInfoResponse.prototype, "mobileScreenWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operatingSystem" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "operatingSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operatingSystemFamily" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "operatingSystemFamily", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operatingSystemVersion" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "operatingSystemVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=producer" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "producer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], UserAgentInfoResponse.prototype, "version", void 0);
    return UserAgentInfoResponse;
}(utils_1.SpeakeasyBase));
exports.UserAgentInfoResponse = UserAgentInfoResponse;
