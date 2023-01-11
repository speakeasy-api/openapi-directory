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
exports.CreateScriptTagResponse = exports.CreateScriptTagRequest = exports.CreateScriptTag200ApplicationJson = exports.CreateScriptTag200ApplicationJsonScriptTag = exports.CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.CreateScriptTagSecurity = exports.CreateScriptTagRequestBody = exports.CreateScriptTagRequestBodyScriptTag = exports.CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;
(function (CreateScriptTagRequestBodyScriptTagDisplayScopeEnum) {
    CreateScriptTagRequestBodyScriptTagDisplayScopeEnum["All"] = "all";
    CreateScriptTagRequestBodyScriptTagDisplayScopeEnum["Shop"] = "shop";
    CreateScriptTagRequestBodyScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    CreateScriptTagRequestBodyScriptTagDisplayScopeEnum["Cart"] = "cart";
})(CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = exports.CreateScriptTagRequestBodyScriptTagDisplayScopeEnum || (exports.CreateScriptTagRequestBodyScriptTagDisplayScopeEnum = {}));
var CreateScriptTagRequestBodyScriptTag = /** @class */ (function (_super) {
    __extends(CreateScriptTagRequestBodyScriptTag, _super);
    function CreateScriptTagRequestBodyScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateScriptTagRequestBodyScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CreateScriptTagRequestBodyScriptTag.prototype, "src", void 0);
    return CreateScriptTagRequestBodyScriptTag;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTagRequestBodyScriptTag = CreateScriptTagRequestBodyScriptTag;
var CreateScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(CreateScriptTagRequestBody, _super);
    function CreateScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", CreateScriptTagRequestBodyScriptTag)
    ], CreateScriptTagRequestBody.prototype, "scriptTag", void 0);
    return CreateScriptTagRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTagRequestBody = CreateScriptTagRequestBody;
var CreateScriptTagSecurity = /** @class */ (function (_super) {
    __extends(CreateScriptTagSecurity, _super);
    function CreateScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreateScriptTagSecurity.prototype, "oAuth2", void 0);
    return CreateScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTagSecurity = CreateScriptTagSecurity;
var CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum;
(function (CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum) {
    CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["All"] = "all";
    CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Shop"] = "shop";
    CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum["Cart"] = "cart";
})(CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = exports.CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum || (exports.CreateScriptTag200ApplicationJsonScriptTagDisplayScopeEnum = {}));
var CreateScriptTag200ApplicationJsonScriptTag = /** @class */ (function (_super) {
    __extends(CreateScriptTag200ApplicationJsonScriptTag, _super);
    function CreateScriptTag200ApplicationJsonScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateScriptTag200ApplicationJsonScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CreateScriptTag200ApplicationJsonScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], CreateScriptTag200ApplicationJsonScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CreateScriptTag200ApplicationJsonScriptTag.prototype, "src", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], CreateScriptTag200ApplicationJsonScriptTag.prototype, "updateDate", void 0);
    return CreateScriptTag200ApplicationJsonScriptTag;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTag200ApplicationJsonScriptTag = CreateScriptTag200ApplicationJsonScriptTag;
var CreateScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateScriptTag200ApplicationJson, _super);
    function CreateScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script_tag" }),
        __metadata("design:type", CreateScriptTag200ApplicationJsonScriptTag)
    ], CreateScriptTag200ApplicationJson.prototype, "scriptTag", void 0);
    return CreateScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTag200ApplicationJson = CreateScriptTag200ApplicationJson;
var CreateScriptTagRequest = /** @class */ (function (_super) {
    __extends(CreateScriptTagRequest, _super);
    function CreateScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateScriptTagRequestBody)
    ], CreateScriptTagRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateScriptTagSecurity)
    ], CreateScriptTagRequest.prototype, "security", void 0);
    return CreateScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTagRequest = CreateScriptTagRequest;
var CreateScriptTagResponse = /** @class */ (function (_super) {
    __extends(CreateScriptTagResponse, _super);
    function CreateScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateScriptTag200ApplicationJson)
    ], CreateScriptTagResponse.prototype, "createScriptTag200ApplicationJSONObject", void 0);
    return CreateScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.CreateScriptTagResponse = CreateScriptTagResponse;
