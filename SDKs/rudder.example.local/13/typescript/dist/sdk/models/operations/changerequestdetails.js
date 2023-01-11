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
exports.ChangeRequestDetailsResponse = exports.ChangeRequestDetailsRequest = exports.ChangeRequestDetails200ApplicationJson = exports.ChangeRequestDetails200ApplicationJsonResultEnum = exports.ChangeRequestDetails200ApplicationJsonData = exports.ChangeRequestDetails200ApplicationJsonActionEnum = exports.ChangeRequestDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChangeRequestDetailsPathParams = /** @class */ (function (_super) {
    __extends(ChangeRequestDetailsPathParams, _super);
    function ChangeRequestDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], ChangeRequestDetailsPathParams.prototype, "changeRequestId", void 0);
    return ChangeRequestDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.ChangeRequestDetailsPathParams = ChangeRequestDetailsPathParams;
var ChangeRequestDetails200ApplicationJsonActionEnum;
(function (ChangeRequestDetails200ApplicationJsonActionEnum) {
    ChangeRequestDetails200ApplicationJsonActionEnum["ChangeRequestDetails"] = "changeRequestDetails";
})(ChangeRequestDetails200ApplicationJsonActionEnum = exports.ChangeRequestDetails200ApplicationJsonActionEnum || (exports.ChangeRequestDetails200ApplicationJsonActionEnum = {}));
var ChangeRequestDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ChangeRequestDetails200ApplicationJsonData, _super);
    function ChangeRequestDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], ChangeRequestDetails200ApplicationJsonData.prototype, "rules", void 0);
    return ChangeRequestDetails200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ChangeRequestDetails200ApplicationJsonData = ChangeRequestDetails200ApplicationJsonData;
var ChangeRequestDetails200ApplicationJsonResultEnum;
(function (ChangeRequestDetails200ApplicationJsonResultEnum) {
    ChangeRequestDetails200ApplicationJsonResultEnum["Success"] = "success";
    ChangeRequestDetails200ApplicationJsonResultEnum["Error"] = "error";
})(ChangeRequestDetails200ApplicationJsonResultEnum = exports.ChangeRequestDetails200ApplicationJsonResultEnum || (exports.ChangeRequestDetails200ApplicationJsonResultEnum = {}));
var ChangeRequestDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChangeRequestDetails200ApplicationJson, _super);
    function ChangeRequestDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ChangeRequestDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ChangeRequestDetails200ApplicationJsonData)
    ], ChangeRequestDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ChangeRequestDetails200ApplicationJson.prototype, "result", void 0);
    return ChangeRequestDetails200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ChangeRequestDetails200ApplicationJson = ChangeRequestDetails200ApplicationJson;
var ChangeRequestDetailsRequest = /** @class */ (function (_super) {
    __extends(ChangeRequestDetailsRequest, _super);
    function ChangeRequestDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeRequestDetailsPathParams)
    ], ChangeRequestDetailsRequest.prototype, "pathParams", void 0);
    return ChangeRequestDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.ChangeRequestDetailsRequest = ChangeRequestDetailsRequest;
var ChangeRequestDetailsResponse = /** @class */ (function (_super) {
    __extends(ChangeRequestDetailsResponse, _super);
    function ChangeRequestDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChangeRequestDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChangeRequestDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChangeRequestDetails200ApplicationJson)
    ], ChangeRequestDetailsResponse.prototype, "changeRequestDetails200ApplicationJSONObject", void 0);
    return ChangeRequestDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.ChangeRequestDetailsResponse = ChangeRequestDetailsResponse;
