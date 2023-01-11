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
exports.GetInlineScriptTagResponse = exports.GetInlineScriptTagRequest = exports.GetInlineScriptTag200ApplicationJson = exports.GetInlineScriptTag200ApplicationJsonInlineScriptTag = exports.GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum = exports.GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum = exports.GetInlineScriptTagSecurity = exports.GetInlineScriptTagPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetInlineScriptTagPathParams = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagPathParams, _super);
    function GetInlineScriptTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=inlineScriptTagId" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTagPathParams.prototype, "inlineScriptTagId", void 0);
    return GetInlineScriptTagPathParams;
}(utils_1.SpeakeasyBase));
exports.GetInlineScriptTagPathParams = GetInlineScriptTagPathParams;
var GetInlineScriptTagSecurity = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagSecurity, _super);
    function GetInlineScriptTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetInlineScriptTagSecurity.prototype, "oAuth2", void 0);
    return GetInlineScriptTagSecurity;
}(utils_1.SpeakeasyBase));
exports.GetInlineScriptTagSecurity = GetInlineScriptTagSecurity;
var GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum;
(function (GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum) {
    GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum["All"] = "all";
    GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum["ThanksPage"] = "thanks_page";
    GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum["Cart"] = "cart";
})(GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum = exports.GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum || (exports.GetInlineScriptTag200ApplicationJsonInlineScriptTagDisplayScopeEnum = {}));
var GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum;
(function (GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum) {
    GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum["ObjectBuilded"] = "object_builded";
})(GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum = exports.GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum || (exports.GetInlineScriptTag200ApplicationJsonInlineScriptTagTriggerEventEnum = {}));
var GetInlineScriptTag200ApplicationJsonInlineScriptTag = /** @class */ (function (_super) {
    __extends(GetInlineScriptTag200ApplicationJsonInlineScriptTag, _super);
    function GetInlineScriptTag200ApplicationJsonInlineScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_scope" }),
        __metadata("design:type", String)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "displayScope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauth_application_id" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "oauthApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "script", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trigger_event" }),
        __metadata("design:type", String)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "triggerEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], GetInlineScriptTag200ApplicationJsonInlineScriptTag.prototype, "updateDate", void 0);
    return GetInlineScriptTag200ApplicationJsonInlineScriptTag;
}(utils_1.SpeakeasyBase));
exports.GetInlineScriptTag200ApplicationJsonInlineScriptTag = GetInlineScriptTag200ApplicationJsonInlineScriptTag;
var GetInlineScriptTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInlineScriptTag200ApplicationJson, _super);
    function GetInlineScriptTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inline_script_tag" }),
        __metadata("design:type", GetInlineScriptTag200ApplicationJsonInlineScriptTag)
    ], GetInlineScriptTag200ApplicationJson.prototype, "inlineScriptTag", void 0);
    return GetInlineScriptTag200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetInlineScriptTag200ApplicationJson = GetInlineScriptTag200ApplicationJson;
var GetInlineScriptTagRequest = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagRequest, _super);
    function GetInlineScriptTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInlineScriptTagPathParams)
    ], GetInlineScriptTagRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInlineScriptTagSecurity)
    ], GetInlineScriptTagRequest.prototype, "security", void 0);
    return GetInlineScriptTagRequest;
}(utils_1.SpeakeasyBase));
exports.GetInlineScriptTagRequest = GetInlineScriptTagRequest;
var GetInlineScriptTagResponse = /** @class */ (function (_super) {
    __extends(GetInlineScriptTagResponse, _super);
    function GetInlineScriptTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInlineScriptTagResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInlineScriptTagResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInlineScriptTag200ApplicationJson)
    ], GetInlineScriptTagResponse.prototype, "getInlineScriptTag200ApplicationJSONObject", void 0);
    return GetInlineScriptTagResponse;
}(utils_1.SpeakeasyBase));
exports.GetInlineScriptTagResponse = GetInlineScriptTagResponse;
