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
exports.DeleteRuleResponse = exports.DeleteRuleRequest = exports.DeleteRule200ApplicationJson = exports.DeleteRule200ApplicationJsonResultEnum = exports.DeleteRule200ApplicationJsonData = exports.DeleteRule200ApplicationJsonActionEnum = exports.DeleteRulePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteRulePathParams = /** @class */ (function (_super) {
    __extends(DeleteRulePathParams, _super);
    function DeleteRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], DeleteRulePathParams.prototype, "ruleId", void 0);
    return DeleteRulePathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteRulePathParams = DeleteRulePathParams;
var DeleteRule200ApplicationJsonActionEnum;
(function (DeleteRule200ApplicationJsonActionEnum) {
    DeleteRule200ApplicationJsonActionEnum["DeleteRule"] = "deleteRule";
})(DeleteRule200ApplicationJsonActionEnum = exports.DeleteRule200ApplicationJsonActionEnum || (exports.DeleteRule200ApplicationJsonActionEnum = {}));
var DeleteRule200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteRule200ApplicationJsonData, _super);
    function DeleteRule200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: shared.Rule }),
        __metadata("design:type", Array)
    ], DeleteRule200ApplicationJsonData.prototype, "rules", void 0);
    return DeleteRule200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.DeleteRule200ApplicationJsonData = DeleteRule200ApplicationJsonData;
var DeleteRule200ApplicationJsonResultEnum;
(function (DeleteRule200ApplicationJsonResultEnum) {
    DeleteRule200ApplicationJsonResultEnum["Success"] = "success";
    DeleteRule200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteRule200ApplicationJsonResultEnum = exports.DeleteRule200ApplicationJsonResultEnum || (exports.DeleteRule200ApplicationJsonResultEnum = {}));
var DeleteRule200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteRule200ApplicationJson, _super);
    function DeleteRule200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteRule200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", DeleteRule200ApplicationJsonData)
    ], DeleteRule200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteRule200ApplicationJson.prototype, "result", void 0);
    return DeleteRule200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteRule200ApplicationJson = DeleteRule200ApplicationJson;
var DeleteRuleRequest = /** @class */ (function (_super) {
    __extends(DeleteRuleRequest, _super);
    function DeleteRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteRulePathParams)
    ], DeleteRuleRequest.prototype, "pathParams", void 0);
    return DeleteRuleRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteRuleRequest = DeleteRuleRequest;
var DeleteRuleResponse = /** @class */ (function (_super) {
    __extends(DeleteRuleResponse, _super);
    function DeleteRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteRuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteRule200ApplicationJson)
    ], DeleteRuleResponse.prototype, "deleteRule200ApplicationJSONObject", void 0);
    return DeleteRuleResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteRuleResponse = DeleteRuleResponse;
