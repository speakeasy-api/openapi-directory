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
exports.CreateInlineScriptTagResponse = exports.CreateInlineScriptTagRequest = exports.CreateInlineScriptTag201ApplicationJson = exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTag = exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum = exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum = exports.CreateInlineScriptTagSecurity = exports.CreateInlineScriptTagRequestBody = exports.CreateInlineScriptTagRequestBodyInlineScriptTag = exports.CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = exports.CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
(function (CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum) {
    CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum["All"] = "all";
    CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum["Cart"] = "cart";
})(CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = exports.CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum || (exports.CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = {}));
var CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
(function (CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum) {
    CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum["ObjectBuilded"] = "object_builded";
})(CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = exports.CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum || (exports.CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = {}));
var CreateInlineScriptTagRequestBodyInlineScriptTag = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTagRequestBodyInlineScriptTag, _super);
    function CreateInlineScriptTagRequestBodyInlineScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTagRequestBodyInlineScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTagRequestBodyInlineScriptTag.prototype, "script", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trigger_event" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTagRequestBodyInlineScriptTag.prototype, "triggerEvent", void 0);
    return CreateInlineScriptTagRequestBodyInlineScriptTag;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTagRequestBodyInlineScriptTag = CreateInlineScriptTagRequestBodyInlineScriptTag;
var CreateInlineScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTagRequestBody, _super);
    function CreateInlineScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inline_script_tag" }),
        __metadata("design:type", CreateInlineScriptTagRequestBodyInlineScriptTag)
    ], CreateInlineScriptTagRequestBody.prototype, "inlineScriptTag", void 0);
    return CreateInlineScriptTagRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTagRequestBody = CreateInlineScriptTagRequestBody;
var CreateInlineScriptTagSecurity = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTagSecurity, _super);
    function CreateInlineScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreateInlineScriptTagSecurity.prototype, "oAuth2", void 0);
    return CreateInlineScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTagSecurity = CreateInlineScriptTagSecurity;
var CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum;
(function (CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum) {
    CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum["All"] = "all";
    CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum["Cart"] = "cart";
})(CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum = exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum || (exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTagDisplayScopeEnum = {}));
var CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum;
(function (CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum) {
    CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum["ObjectBuilded"] = "object_builded";
})(CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum = exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum || (exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTagTriggerEventEnum = {}));
var CreateInlineScriptTag201ApplicationJsonInlineScriptTag = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTag201ApplicationJsonInlineScriptTag, _super);
    function CreateInlineScriptTag201ApplicationJsonInlineScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "script", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trigger_event" }),
        __metadata("design:type", String)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "triggerEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], CreateInlineScriptTag201ApplicationJsonInlineScriptTag.prototype, "updateDate", void 0);
    return CreateInlineScriptTag201ApplicationJsonInlineScriptTag;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTag201ApplicationJsonInlineScriptTag = CreateInlineScriptTag201ApplicationJsonInlineScriptTag;
var CreateInlineScriptTag201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTag201ApplicationJson, _super);
    function CreateInlineScriptTag201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inline_script_tag" }),
        __metadata("design:type", CreateInlineScriptTag201ApplicationJsonInlineScriptTag)
    ], CreateInlineScriptTag201ApplicationJson.prototype, "inlineScriptTag", void 0);
    return CreateInlineScriptTag201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTag201ApplicationJson = CreateInlineScriptTag201ApplicationJson;
var CreateInlineScriptTagRequest = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTagRequest, _super);
    function CreateInlineScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateInlineScriptTagRequestBody)
    ], CreateInlineScriptTagRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInlineScriptTagSecurity)
    ], CreateInlineScriptTagRequest.prototype, "security", void 0);
    return CreateInlineScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTagRequest = CreateInlineScriptTagRequest;
var CreateInlineScriptTagResponse = /** @class */ (function (_super) {
    __extends(CreateInlineScriptTagResponse, _super);
    function CreateInlineScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateInlineScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateInlineScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInlineScriptTag201ApplicationJson)
    ], CreateInlineScriptTagResponse.prototype, "createInlineScriptTag201ApplicationJSONObject", void 0);
    return CreateInlineScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.CreateInlineScriptTagResponse = CreateInlineScriptTagResponse;
