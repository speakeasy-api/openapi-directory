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
exports.CreateUsageChargeResponse = exports.CreateUsageChargeRequest = exports.CreateUsageCharge201ApplicationJson = exports.CreateUsageCharge201ApplicationJsonUsageCharge = exports.CreateUsageChargeSecurity = exports.CreateUsageChargeRequestBody = exports.CreateUsageChargeRequestBodyUsageCharge = exports.CreateUsageChargeHeaders = exports.CreateUsageChargePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateUsageChargePathParams = /** @class */ (function (_super) {
    __extends(CreateUsageChargePathParams, _super);
    function CreateUsageChargePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=recurringApplicationChargeId" }),
        __metadata("design:type", String)
    ], CreateUsageChargePathParams.prototype, "recurringApplicationChargeId", void 0);
    return CreateUsageChargePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargePathParams = CreateUsageChargePathParams;
var CreateUsageChargeHeaders = /** @class */ (function (_super) {
    __extends(CreateUsageChargeHeaders, _super);
    function CreateUsageChargeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Appstore-Usage-Charge-Token" }),
        __metadata("design:type", String)
    ], CreateUsageChargeHeaders.prototype, "xAppstoreUsageChargeToken", void 0);
    return CreateUsageChargeHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargeHeaders = CreateUsageChargeHeaders;
var CreateUsageChargeRequestBodyUsageCharge = /** @class */ (function (_super) {
    __extends(CreateUsageChargeRequestBodyUsageCharge, _super);
    function CreateUsageChargeRequestBodyUsageCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateUsageChargeRequestBodyUsageCharge.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=point" }),
        __metadata("design:type", Number)
    ], CreateUsageChargeRequestBodyUsageCharge.prototype, "point", void 0);
    return CreateUsageChargeRequestBodyUsageCharge;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargeRequestBodyUsageCharge = CreateUsageChargeRequestBodyUsageCharge;
var CreateUsageChargeRequestBody = /** @class */ (function (_super) {
    __extends(CreateUsageChargeRequestBody, _super);
    function CreateUsageChargeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage_charge" }),
        __metadata("design:type", CreateUsageChargeRequestBodyUsageCharge)
    ], CreateUsageChargeRequestBody.prototype, "usageCharge", void 0);
    return CreateUsageChargeRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargeRequestBody = CreateUsageChargeRequestBody;
var CreateUsageChargeSecurity = /** @class */ (function (_super) {
    __extends(CreateUsageChargeSecurity, _super);
    function CreateUsageChargeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreateUsageChargeSecurity.prototype, "oAuth2", void 0);
    return CreateUsageChargeSecurity;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargeSecurity = CreateUsageChargeSecurity;
var CreateUsageCharge201ApplicationJsonUsageCharge = /** @class */ (function (_super) {
    __extends(CreateUsageCharge201ApplicationJsonUsageCharge, _super);
    function CreateUsageCharge201ApplicationJsonUsageCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateUsageCharge201ApplicationJsonUsageCharge.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateUsageCharge201ApplicationJsonUsageCharge.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], CreateUsageCharge201ApplicationJsonUsageCharge.prototype, "makeDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=point" }),
        __metadata("design:type", Number)
    ], CreateUsageCharge201ApplicationJsonUsageCharge.prototype, "point", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], CreateUsageCharge201ApplicationJsonUsageCharge.prototype, "updateDate", void 0);
    return CreateUsageCharge201ApplicationJsonUsageCharge;
}(utils_1.SpeakeasyBase));
exports.CreateUsageCharge201ApplicationJsonUsageCharge = CreateUsageCharge201ApplicationJsonUsageCharge;
var CreateUsageCharge201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateUsageCharge201ApplicationJson, _super);
    function CreateUsageCharge201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage_charge" }),
        __metadata("design:type", CreateUsageCharge201ApplicationJsonUsageCharge)
    ], CreateUsageCharge201ApplicationJson.prototype, "usageCharge", void 0);
    return CreateUsageCharge201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateUsageCharge201ApplicationJson = CreateUsageCharge201ApplicationJson;
var CreateUsageChargeRequest = /** @class */ (function (_super) {
    __extends(CreateUsageChargeRequest, _super);
    function CreateUsageChargeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUsageChargePathParams)
    ], CreateUsageChargeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUsageChargeHeaders)
    ], CreateUsageChargeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateUsageChargeRequestBody)
    ], CreateUsageChargeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUsageChargeSecurity)
    ], CreateUsageChargeRequest.prototype, "security", void 0);
    return CreateUsageChargeRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargeRequest = CreateUsageChargeRequest;
var CreateUsageChargeResponse = /** @class */ (function (_super) {
    __extends(CreateUsageChargeResponse, _super);
    function CreateUsageChargeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUsageChargeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateUsageChargeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUsageCharge201ApplicationJson)
    ], CreateUsageChargeResponse.prototype, "createUsageCharge201ApplicationJSONObject", void 0);
    return CreateUsageChargeResponse;
}(utils_1.SpeakeasyBase));
exports.CreateUsageChargeResponse = CreateUsageChargeResponse;
