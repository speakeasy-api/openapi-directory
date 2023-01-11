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
exports.DeleteV1ScriptTagsScriptTagIdJsonResponse = exports.DeleteV1ScriptTagsScriptTagIdJsonRequest = exports.DeleteV1ScriptTagsScriptTagIdJsonSecurity = exports.DeleteV1ScriptTagsScriptTagIdJsonPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteV1ScriptTagsScriptTagIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonPathParams, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scriptTagId" }),
        __metadata("design:type", Number)
    ], DeleteV1ScriptTagsScriptTagIdJsonPathParams.prototype, "scriptTagId", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteV1ScriptTagsScriptTagIdJsonPathParams = DeleteV1ScriptTagsScriptTagIdJsonPathParams;
var DeleteV1ScriptTagsScriptTagIdJsonSecurity = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonSecurity, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteV1ScriptTagsScriptTagIdJsonSecurity.prototype, "oAuth2", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteV1ScriptTagsScriptTagIdJsonSecurity = DeleteV1ScriptTagsScriptTagIdJsonSecurity;
var DeleteV1ScriptTagsScriptTagIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonRequest, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteV1ScriptTagsScriptTagIdJsonPathParams)
    ], DeleteV1ScriptTagsScriptTagIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteV1ScriptTagsScriptTagIdJsonSecurity)
    ], DeleteV1ScriptTagsScriptTagIdJsonRequest.prototype, "security", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteV1ScriptTagsScriptTagIdJsonRequest = DeleteV1ScriptTagsScriptTagIdJsonRequest;
var DeleteV1ScriptTagsScriptTagIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteV1ScriptTagsScriptTagIdJsonResponse, _super);
    function DeleteV1ScriptTagsScriptTagIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteV1ScriptTagsScriptTagIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteV1ScriptTagsScriptTagIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteV1ScriptTagsScriptTagIdJsonResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteV1ScriptTagsScriptTagIdJsonResponse = DeleteV1ScriptTagsScriptTagIdJsonResponse;
