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
exports.CreateRuleCategoryResponse = exports.CreateRuleCategoryRequest = exports.CreateRuleCategory200ApplicationJson = exports.CreateRuleCategory200ApplicationJsonResultEnum = exports.CreateRuleCategory200ApplicationJsonData = exports.CreateRuleCategory200ApplicationJsonActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateRuleCategory200ApplicationJsonActionEnum;
(function (CreateRuleCategory200ApplicationJsonActionEnum) {
    CreateRuleCategory200ApplicationJsonActionEnum["CreateRuleCategory"] = "CreateRuleCategory";
})(CreateRuleCategory200ApplicationJsonActionEnum = exports.CreateRuleCategory200ApplicationJsonActionEnum || (exports.CreateRuleCategory200ApplicationJsonActionEnum = {}));
var CreateRuleCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateRuleCategory200ApplicationJsonData, _super);
    function CreateRuleCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ruleCategories", elemType: shared.RuleCategory }),
        __metadata("design:type", Array)
    ], CreateRuleCategory200ApplicationJsonData.prototype, "ruleCategories", void 0);
    return CreateRuleCategory200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.CreateRuleCategory200ApplicationJsonData = CreateRuleCategory200ApplicationJsonData;
var CreateRuleCategory200ApplicationJsonResultEnum;
(function (CreateRuleCategory200ApplicationJsonResultEnum) {
    CreateRuleCategory200ApplicationJsonResultEnum["Success"] = "success";
    CreateRuleCategory200ApplicationJsonResultEnum["Error"] = "error";
})(CreateRuleCategory200ApplicationJsonResultEnum = exports.CreateRuleCategory200ApplicationJsonResultEnum || (exports.CreateRuleCategory200ApplicationJsonResultEnum = {}));
var CreateRuleCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateRuleCategory200ApplicationJson, _super);
    function CreateRuleCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateRuleCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", CreateRuleCategory200ApplicationJsonData)
    ], CreateRuleCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateRuleCategory200ApplicationJson.prototype, "result", void 0);
    return CreateRuleCategory200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateRuleCategory200ApplicationJson = CreateRuleCategory200ApplicationJson;
var CreateRuleCategoryRequest = /** @class */ (function (_super) {
    __extends(CreateRuleCategoryRequest, _super);
    function CreateRuleCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RuleCategory)
    ], CreateRuleCategoryRequest.prototype, "request", void 0);
    return CreateRuleCategoryRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRuleCategoryRequest = CreateRuleCategoryRequest;
var CreateRuleCategoryResponse = /** @class */ (function (_super) {
    __extends(CreateRuleCategoryResponse, _super);
    function CreateRuleCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRuleCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRuleCategory200ApplicationJson)
    ], CreateRuleCategoryResponse.prototype, "createRuleCategory200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRuleCategoryResponse.prototype, "statusCode", void 0);
    return CreateRuleCategoryResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRuleCategoryResponse = CreateRuleCategoryResponse;
