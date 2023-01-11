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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScriptTagResponse = exports.GetScriptTagRequest = exports.GetScriptTag200ApplicationJson = exports.GetScriptTag200ApplicationJsonScriptTag = exports.GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.GetScriptTagSecurity = exports.GetScriptTagPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetScriptTagPathParams = /** @class */ (function (_super) {
    __extends(GetScriptTagPathParams, _super);
    function GetScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], GetScriptTagPathParams.prototype, "scriptTagId", void 0);
    return GetScriptTagPathParams;
}(utils_1.SpeakeasyBase));
exports.GetScriptTagPathParams = GetScriptTagPathParams;
var GetScriptTagSecurity = /** @class */ (function (_super) {
    __extends(GetScriptTagSecurity, _super);
    function GetScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetScriptTagSecurity.prototype, "oAuth2", void 0);
    return GetScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.GetScriptTagSecurity = GetScriptTagSecurity;
var GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["All"] = "all";
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Cart"] = "cart";
})(GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (exports.GetScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var GetScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(GetScriptTag200ApplicationJsonScriptTag, _super);
    function GetScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return GetScriptTag200ApplicationJsonScriptTag;
}(utils_1.SpeakeasyBase));
exports.GetScriptTag200ApplicationJsonScriptTag = GetScriptTag200ApplicationJsonScriptTag;
var GetScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetScriptTag200ApplicationJson, _super);
    function GetScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", GetScriptTag200ApplicationJsonScriptTag)
    ], GetScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return GetScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetScriptTag200ApplicationJson = GetScriptTag200ApplicationJson;
var GetScriptTagRequest = /** @class */ (function (_super) {
    __extends(GetScriptTagRequest, _super);
    function GetScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetScriptTagPathParams)
    ], GetScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetScriptTagSecurity)
    ], GetScriptTagRequest.prototype, "security", void 0);
    return GetScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.GetScriptTagRequest = GetScriptTagRequest;
var GetScriptTagResponse = /** @class */ (function (_super) {
    __extends(GetScriptTagResponse, _super);
    function GetScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetScriptTag200ApplicationJson)
    ], GetScriptTagResponse.prototype, "getScriptTag200ApplicationJSONObject", void 0);
    return GetScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.GetScriptTagResponse = GetScriptTagResponse;
