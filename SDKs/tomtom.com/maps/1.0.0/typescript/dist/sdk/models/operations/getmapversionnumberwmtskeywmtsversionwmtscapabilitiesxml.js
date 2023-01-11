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
exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest = exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams = exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum;
(function (GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum) {
    GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum["One00"] = "1.0.0";
})(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum = exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum || (exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum = {}));
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams, _super);
    function GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams.prototype, "versionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=wmtsVersion" }),
        __metadata("design:type", String)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams.prototype, "wmtsVersion", void 0);
    return GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams = GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams;
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest, _super);
    function GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest.prototype, "pathParams", void 0);
    return GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest = GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest;
var GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = /** @class */ (function (_super) {
    __extends(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse, _super);
    function GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse.prototype, "statusCode", void 0);
    return GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse;
}(utils_1.SpeakeasyBase));
exports.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse = GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse;
