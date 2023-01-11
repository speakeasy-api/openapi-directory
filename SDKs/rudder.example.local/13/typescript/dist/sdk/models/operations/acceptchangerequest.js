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
exports.AcceptChangeRequestResponse = exports.AcceptChangeRequestRequest = exports.AcceptChangeRequest200ApplicationJson = exports.AcceptChangeRequest200ApplicationJsonResultEnum = exports.AcceptChangeRequest200ApplicationJsonData = exports.AcceptChangeRequest200ApplicationJsonActionEnum = exports.AcceptChangeRequestRequestBody = exports.AcceptChangeRequestRequestBodyStatusEnum = exports.AcceptChangeRequestPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AcceptChangeRequestPathParams = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestPathParams, _super);
    function AcceptChangeRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], AcceptChangeRequestPathParams.prototype, "changeRequestId", void 0);
    return AcceptChangeRequestPathParams;
}(utils_1.SpeakeasyBase));
exports.AcceptChangeRequestPathParams = AcceptChangeRequestPathParams;
var AcceptChangeRequestRequestBodyStatusEnum;
(function (AcceptChangeRequestRequestBodyStatusEnum) {
    AcceptChangeRequestRequestBodyStatusEnum["PendingDeployment"] = "pending deployment";
    AcceptChangeRequestRequestBodyStatusEnum["Deployed"] = "deployed";
})(AcceptChangeRequestRequestBodyStatusEnum = exports.AcceptChangeRequestRequestBodyStatusEnum || (exports.AcceptChangeRequestRequestBodyStatusEnum = {}));
var AcceptChangeRequestRequestBody = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestRequestBody, _super);
    function AcceptChangeRequestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AcceptChangeRequestRequestBody.prototype, "status", void 0);
    return AcceptChangeRequestRequestBody;
}(utils_1.SpeakeasyBase));
exports.AcceptChangeRequestRequestBody = AcceptChangeRequestRequestBody;
var AcceptChangeRequest200ApplicationJsonActionEnum;
(function (AcceptChangeRequest200ApplicationJsonActionEnum) {
    AcceptChangeRequest200ApplicationJsonActionEnum["AcceptChangeRequest"] = "acceptChangeRequest";
})(AcceptChangeRequest200ApplicationJsonActionEnum = exports.AcceptChangeRequest200ApplicationJsonActionEnum || (exports.AcceptChangeRequest200ApplicationJsonActionEnum = {}));
var AcceptChangeRequest200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(AcceptChangeRequest200ApplicationJsonData, _super);
    function AcceptChangeRequest200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], AcceptChangeRequest200ApplicationJsonData.prototype, "rules", void 0);
    return AcceptChangeRequest200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.AcceptChangeRequest200ApplicationJsonData = AcceptChangeRequest200ApplicationJsonData;
var AcceptChangeRequest200ApplicationJsonResultEnum;
(function (AcceptChangeRequest200ApplicationJsonResultEnum) {
    AcceptChangeRequest200ApplicationJsonResultEnum["Success"] = "success";
    AcceptChangeRequest200ApplicationJsonResultEnum["Error"] = "error";
})(AcceptChangeRequest200ApplicationJsonResultEnum = exports.AcceptChangeRequest200ApplicationJsonResultEnum || (exports.AcceptChangeRequest200ApplicationJsonResultEnum = {}));
var AcceptChangeRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(AcceptChangeRequest200ApplicationJson, _super);
    function AcceptChangeRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AcceptChangeRequest200ApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", AcceptChangeRequest200ApplicationJsonData)
    ], AcceptChangeRequest200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], AcceptChangeRequest200ApplicationJson.prototype, "result", void 0);
    return AcceptChangeRequest200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AcceptChangeRequest200ApplicationJson = AcceptChangeRequest200ApplicationJson;
var AcceptChangeRequestRequest = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestRequest, _super);
    function AcceptChangeRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptChangeRequestPathParams)
    ], AcceptChangeRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AcceptChangeRequestRequestBody)
    ], AcceptChangeRequestRequest.prototype, "request", void 0);
    return AcceptChangeRequestRequest;
}(utils_1.SpeakeasyBase));
exports.AcceptChangeRequestRequest = AcceptChangeRequestRequest;
var AcceptChangeRequestResponse = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestResponse, _super);
    function AcceptChangeRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptChangeRequestResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AcceptChangeRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptChangeRequest200ApplicationJson)
    ], AcceptChangeRequestResponse.prototype, "acceptChangeRequest200ApplicationJSONObject", void 0);
    return AcceptChangeRequestResponse;
}(utils_1.SpeakeasyBase));
exports.AcceptChangeRequestResponse = AcceptChangeRequestResponse;
