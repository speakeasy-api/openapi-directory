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
exports.RuleDetailsResponse = exports.RuleDetailsRequest = exports.RuleDetails200ApplicationJson = exports.RuleDetails200ApplicationJsonResultEnum = exports.RuleDetails200ApplicationJsonData = exports.RuleDetails200ApplicationJsonActionEnum = exports.RuleDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RuleDetailsPathParams = /** @class */ (function (_super) {
    __extends(RuleDetailsPathParams, _super);
    function RuleDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], RuleDetailsPathParams.prototype, "ruleId", void 0);
    return RuleDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.RuleDetailsPathParams = RuleDetailsPathParams;
var RuleDetails200ApplicationJsonActionEnum;
(function (RuleDetails200ApplicationJsonActionEnum) {
    RuleDetails200ApplicationJsonActionEnum["RuleDetails"] = "ruleDetails";
})(RuleDetails200ApplicationJsonActionEnum = exports.RuleDetails200ApplicationJsonActionEnum || (exports.RuleDetails200ApplicationJsonActionEnum = {}));
var RuleDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(RuleDetails200ApplicationJsonData, _super);
    function RuleDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: shared.Rule }),
        __metadata("design:type", Array)
    ], RuleDetails200ApplicationJsonData.prototype, "rules", void 0);
    return RuleDetails200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.RuleDetails200ApplicationJsonData = RuleDetails200ApplicationJsonData;
var RuleDetails200ApplicationJsonResultEnum;
(function (RuleDetails200ApplicationJsonResultEnum) {
    RuleDetails200ApplicationJsonResultEnum["Success"] = "success";
    RuleDetails200ApplicationJsonResultEnum["Error"] = "error";
})(RuleDetails200ApplicationJsonResultEnum = exports.RuleDetails200ApplicationJsonResultEnum || (exports.RuleDetails200ApplicationJsonResultEnum = {}));
var RuleDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(RuleDetails200ApplicationJson, _super);
    function RuleDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], RuleDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", RuleDetails200ApplicationJsonData)
    ], RuleDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], RuleDetails200ApplicationJson.prototype, "result", void 0);
    return RuleDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.RuleDetails200ApplicationJson = RuleDetails200ApplicationJson;
var RuleDetailsRequest = /** @class */ (function (_super) {
    __extends(RuleDetailsRequest, _super);
    function RuleDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RuleDetailsPathParams)
    ], RuleDetailsRequest.prototype, "pathParams", void 0);
    return RuleDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.RuleDetailsRequest = RuleDetailsRequest;
var RuleDetailsResponse = /** @class */ (function (_super) {
    __extends(RuleDetailsResponse, _super);
    function RuleDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RuleDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RuleDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RuleDetails200ApplicationJson)
    ], RuleDetailsResponse.prototype, "ruleDetails200ApplicationJSONObject", void 0);
    return RuleDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.RuleDetailsResponse = RuleDetailsResponse;
