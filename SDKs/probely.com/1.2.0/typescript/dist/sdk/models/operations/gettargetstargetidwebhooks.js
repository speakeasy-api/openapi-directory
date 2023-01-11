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
exports.GetTargetsTargetIdWebhooksResponse = exports.GetTargetsTargetIdWebhooksRequest = exports.GetTargetsTargetIdWebhooks403ApplicationJson = exports.GetTargetsTargetIdWebhooks401ApplicationJson = exports.GetTargetsTargetIdWebhooks200ApplicationJson = exports.GetTargetsTargetIdWebhooksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdWebhooksPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdWebhooksPathParams, _super);
    function GetTargetsTargetIdWebhooksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdWebhooksPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdWebhooksPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdWebhooksPathParams = GetTargetsTargetIdWebhooksPathParams;
var GetTargetsTargetIdWebhooks200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdWebhooks200ApplicationJson, _super);
    function GetTargetsTargetIdWebhooks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdWebhooks200ApplicationJson.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdWebhooks200ApplicationJson.prototype, "length", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdWebhooks200ApplicationJson.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_total" }),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdWebhooks200ApplicationJson.prototype, "pageTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: shared.Webhook }),
        __metadata("design:type", Array)
    ], GetTargetsTargetIdWebhooks200ApplicationJson.prototype, "results", void 0);
    return GetTargetsTargetIdWebhooks200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdWebhooks200ApplicationJson = GetTargetsTargetIdWebhooks200ApplicationJson;
var GetTargetsTargetIdWebhooks401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdWebhooks401ApplicationJson, _super);
    function GetTargetsTargetIdWebhooks401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdWebhooks401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdWebhooks401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdWebhooks401ApplicationJson = GetTargetsTargetIdWebhooks401ApplicationJson;
var GetTargetsTargetIdWebhooks403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdWebhooks403ApplicationJson, _super);
    function GetTargetsTargetIdWebhooks403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdWebhooks403ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdWebhooks403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdWebhooks403ApplicationJson = GetTargetsTargetIdWebhooks403ApplicationJson;
var GetTargetsTargetIdWebhooksRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdWebhooksRequest, _super);
    function GetTargetsTargetIdWebhooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdWebhooksPathParams)
    ], GetTargetsTargetIdWebhooksRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdWebhooksRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdWebhooksRequest = GetTargetsTargetIdWebhooksRequest;
var GetTargetsTargetIdWebhooksResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdWebhooksResponse, _super);
    function GetTargetsTargetIdWebhooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdWebhooksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdWebhooksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdWebhooks200ApplicationJson)
    ], GetTargetsTargetIdWebhooksResponse.prototype, "getTargetsTargetIdWebhooks200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdWebhooks401ApplicationJson)
    ], GetTargetsTargetIdWebhooksResponse.prototype, "getTargetsTargetIdWebhooks401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdWebhooks403ApplicationJson)
    ], GetTargetsTargetIdWebhooksResponse.prototype, "getTargetsTargetIdWebhooks403ApplicationJSONObject", void 0);
    return GetTargetsTargetIdWebhooksResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdWebhooksResponse = GetTargetsTargetIdWebhooksResponse;
