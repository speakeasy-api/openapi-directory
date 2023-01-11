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
exports.UpdateRuleCategoryResponse = exports.UpdateRuleCategoryRequest = exports.UpdateRuleCategory200ApplicationJson = exports.UpdateRuleCategory200ApplicationJsonResultEnum = exports.UpdateRuleCategory200ApplicationJsonData = exports.UpdateRuleCategory200ApplicationJsonActionEnum = exports.UpdateRuleCategoryPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateRuleCategoryPathParams = /** @class */ (function (_super) {
    __extends(UpdateRuleCategoryPathParams, _super);
    function UpdateRuleCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" }),
        __metadata("design:type", String)
    ], UpdateRuleCategoryPathParams.prototype, "ruleCategoryId", void 0);
    return UpdateRuleCategoryPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateRuleCategoryPathParams = UpdateRuleCategoryPathParams;
var UpdateRuleCategory200ApplicationJsonActionEnum;
(function (UpdateRuleCategory200ApplicationJsonActionEnum) {
    UpdateRuleCategory200ApplicationJsonActionEnum["UpdateRuleCategory"] = "UpdateRuleCategory";
})(UpdateRuleCategory200ApplicationJsonActionEnum = exports.UpdateRuleCategory200ApplicationJsonActionEnum || (exports.UpdateRuleCategory200ApplicationJsonActionEnum = {}));
var UpdateRuleCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateRuleCategory200ApplicationJsonData, _super);
    function UpdateRuleCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleCategories", elemType: shared.RuleCategory }),
        __metadata("design:type", Array)
    ], UpdateRuleCategory200ApplicationJsonData.prototype, "ruleCategories", void 0);
    return UpdateRuleCategory200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.UpdateRuleCategory200ApplicationJsonData = UpdateRuleCategory200ApplicationJsonData;
var UpdateRuleCategory200ApplicationJsonResultEnum;
(function (UpdateRuleCategory200ApplicationJsonResultEnum) {
    UpdateRuleCategory200ApplicationJsonResultEnum["Success"] = "success";
    UpdateRuleCategory200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateRuleCategory200ApplicationJsonResultEnum = exports.UpdateRuleCategory200ApplicationJsonResultEnum || (exports.UpdateRuleCategory200ApplicationJsonResultEnum = {}));
var UpdateRuleCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateRuleCategory200ApplicationJson, _super);
    function UpdateRuleCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateRuleCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", UpdateRuleCategory200ApplicationJsonData)
    ], UpdateRuleCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateRuleCategory200ApplicationJson.prototype, "result", void 0);
    return UpdateRuleCategory200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateRuleCategory200ApplicationJson = UpdateRuleCategory200ApplicationJson;
var UpdateRuleCategoryRequest = /** @class */ (function (_super) {
    __extends(UpdateRuleCategoryRequest, _super);
    function UpdateRuleCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateRuleCategoryPathParams)
    ], UpdateRuleCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RuleCategoryUpdate)
    ], UpdateRuleCategoryRequest.prototype, "request", void 0);
    return UpdateRuleCategoryRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateRuleCategoryRequest = UpdateRuleCategoryRequest;
var UpdateRuleCategoryResponse = /** @class */ (function (_super) {
    __extends(UpdateRuleCategoryResponse, _super);
    function UpdateRuleCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateRuleCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateRuleCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateRuleCategory200ApplicationJson)
    ], UpdateRuleCategoryResponse.prototype, "updateRuleCategory200ApplicationJSONObject", void 0);
    return UpdateRuleCategoryResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateRuleCategoryResponse = UpdateRuleCategoryResponse;
