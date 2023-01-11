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
exports.UpdateInlineScriptTagResponse = exports.UpdateInlineScriptTagRequest = exports.UpdateInlineScriptTag200ApplicationJson = exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTag = exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum = exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum = exports.UpdateInlineScriptTagSecurity = exports.UpdateInlineScriptTagRequestBody = exports.UpdateInlineScriptTagRequestBodyInlineScriptTag = exports.UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = exports.UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = exports.UpdateInlineScriptTagPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateInlineScriptTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTagPathParams, _super);
    function UpdateInlineScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" }),
        __metadata("design:type", Number)
    ], UpdateInlineScriptTagPathParams.prototype, "inlineScriptTagId", void 0);
    return UpdateInlineScriptTagPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTagPathParams = UpdateInlineScriptTagPathParams;
var UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
(function (UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum) {
    UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum["All"] = "all";
    UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum["Cart"] = "cart";
})(UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = exports.UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum || (exports.UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = {}));
var UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
(function (UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum) {
    UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum["ObjectBuilded"] = "object_builded";
})(UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = exports.UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum || (exports.UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = {}));
var UpdateInlineScriptTagRequestBodyInlineScriptTag = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTagRequestBodyInlineScriptTag, _super);
    function UpdateInlineScriptTagRequestBodyInlineScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTagRequestBodyInlineScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTagRequestBodyInlineScriptTag.prototype, "script", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trigger_event" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTagRequestBodyInlineScriptTag.prototype, "triggerEvent", void 0);
    return UpdateInlineScriptTagRequestBodyInlineScriptTag;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTagRequestBodyInlineScriptTag = UpdateInlineScriptTagRequestBodyInlineScriptTag;
var UpdateInlineScriptTagRequestBody = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTagRequestBody, _super);
    function UpdateInlineScriptTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inline_script_tag" }),
        __metadata("design:type", UpdateInlineScriptTagRequestBodyInlineScriptTag)
    ], UpdateInlineScriptTagRequestBody.prototype, "inlineScriptTag", void 0);
    return UpdateInlineScriptTagRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTagRequestBody = UpdateInlineScriptTagRequestBody;
var UpdateInlineScriptTagSecurity = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTagSecurity, _super);
    function UpdateInlineScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdateInlineScriptTagSecurity.prototype, "oAuth2", void 0);
    return UpdateInlineScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTagSecurity = UpdateInlineScriptTagSecurity;
var UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;
(function (UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum) {
    UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum["All"] = "all";
    UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum["Cart"] = "cart";
})(UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum = exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum || (exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum = {}));
var UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;
(function (UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum) {
    UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum["ObjectBuilded"] = "object_builded";
})(UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum = exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum || (exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum = {}));
var UpdateInlineScriptTag200ApplicationJsonInlineScriptTag = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTag200ApplicationJsonInlineScriptTag, _super);
    function UpdateInlineScriptTag200ApplicationJsonInlineScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "script", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trigger_event" }),
        __metadata("design:type", String)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "triggerEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], UpdateInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "updateDate", void 0);
    return UpdateInlineScriptTag200ApplicationJsonInlineScriptTag;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTag200ApplicationJsonInlineScriptTag = UpdateInlineScriptTag200ApplicationJsonInlineScriptTag;
var UpdateInlineScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTag200ApplicationJson, _super);
    function UpdateInlineScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inline_script_tag" }),
        __metadata("design:type", UpdateInlineScriptTag200ApplicationJsonInlineScriptTag)
    ], UpdateInlineScriptTag200ApplicationJson.prototype, "inlineScriptTag", void 0);
    return UpdateInlineScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTag200ApplicationJson = UpdateInlineScriptTag200ApplicationJson;
var UpdateInlineScriptTagRequest = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTagRequest, _super);
    function UpdateInlineScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateInlineScriptTagPathParams)
    ], UpdateInlineScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateInlineScriptTagRequestBody)
    ], UpdateInlineScriptTagRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateInlineScriptTagSecurity)
    ], UpdateInlineScriptTagRequest.prototype, "security", void 0);
    return UpdateInlineScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTagRequest = UpdateInlineScriptTagRequest;
var UpdateInlineScriptTagResponse = /** @class */ (function (_super) {
    __extends(UpdateInlineScriptTagResponse, _super);
    function UpdateInlineScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateInlineScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateInlineScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateInlineScriptTag200ApplicationJson)
    ], UpdateInlineScriptTagResponse.prototype, "updateInlineScriptTag200ApplicationJSONObject", void 0);
    return UpdateInlineScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateInlineScriptTagResponse = UpdateInlineScriptTagResponse;
