"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ReturnASandboxAchTransferResponse = exports.ReturnASandboxAchTransferDefaultApplicationJson1 = exports.ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson2 = exports.ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson3 = exports.ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson4 = exports.ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson5 = exports.ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson6 = exports.ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson7 = exports.ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson8 = exports.ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson9 = exports.ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson10 = exports.ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson11 = exports.ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson12 = exports.ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson13 = exports.ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum = exports.ReturnASandboxAchTransferRequest = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var ReturnASandboxAchTransferRequest = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferRequest, _super);
    function ReturnASandboxAchTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=ach_transfer_id",
        }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferRequest.prototype, "achTransferId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReturnASandboxAchTransferParameters)
    ], ReturnASandboxAchTransferRequest.prototype, "returnASandboxAchTransferParameters", void 0);
    return ReturnASandboxAchTransferRequest;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferRequest = ReturnASandboxAchTransferRequest;
var ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum["FourHundredAndTwentyNine"] = "429";
})(ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum["RateLimitedError"] = "rate_limited_error";
})(ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson13 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson13, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson13.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "retry_after" }),
        __metadata("design:type", Number)
    ], ReturnASandboxAchTransferDefaultApplicationJson13.prototype, "retryAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson13.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson13.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson13.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson13;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson13 = ReturnASandboxAchTransferDefaultApplicationJson13;
var ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum["FourHundredAndThree"] = "403";
})(ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum["PrivateFeatureError"] = "private_feature_error";
})(ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson12 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson12, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson12.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson12.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson12.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson12.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson12;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson12 = ReturnASandboxAchTransferDefaultApplicationJson12;
var ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum["FourHundredAndFour"] = "404";
})(ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum["ObjectNotFoundError"] = "object_not_found_error";
})(ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson11 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson11, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson11.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson11.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson11.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson11.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson11;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson11 = ReturnASandboxAchTransferDefaultApplicationJson11;
var ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum["FourHundred"] = "400";
})(ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum["MalformedRequestError"] = "malformed_request_error";
})(ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson10 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson10, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson10.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson10.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson10.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson10.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson10;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson10 = ReturnASandboxAchTransferDefaultApplicationJson10;
var ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum["FourHundred"] = "400";
})(ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum["InvalidParametersError"] = "invalid_parameters_error";
})(ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson9 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson9, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson9.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "errors" }),
        __metadata("design:type", Array)
    ], ReturnASandboxAchTransferDefaultApplicationJson9.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson9.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson9.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson9.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson9;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson9 = ReturnASandboxAchTransferDefaultApplicationJson9;
var ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum["FourHundredAndNine"] = "409";
})(ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum["InvalidOperationError"] = "invalid_operation_error";
})(ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson8 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson8, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson8.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson8.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson8.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson8.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson8;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson8 = ReturnASandboxAchTransferDefaultApplicationJson8;
var ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum["FourHundredAndOne"] = "401";
})(ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum["InvalidApiKeyError"] = "invalid_api_key_error";
})(ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson7 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson7, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson7.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson7.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson7.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson7.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson7;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson7 = ReturnASandboxAchTransferDefaultApplicationJson7;
var ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum["FiveHundred"] = "500";
})(ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum["InternalServerError"] = "internal_server_error";
})(ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson6 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson6, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson6.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson6.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson6.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson6.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson6;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson6 = ReturnASandboxAchTransferDefaultApplicationJson6;
var ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum["FourHundredAndThree"] = "403";
})(ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum["InsufficientPermissionsError"] = "insufficient_permissions_error";
})(ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson5 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson5, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson5.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson5.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson5.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson5.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson5;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson5 = ReturnASandboxAchTransferDefaultApplicationJson5;
var ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum["FourHundredAndTwentyTwo"] = "422";
})(ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum["IdempotencyUnprocessableError"] = "idempotency_unprocessable_error";
})(ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson4 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson4, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson4.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson4.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson4.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson4.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson4;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson4 = ReturnASandboxAchTransferDefaultApplicationJson4;
var ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum["FourHundredAndNine"] = "409";
})(ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum["IdempotencyConflictError"] = "idempotency_conflict_error";
})(ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson3 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson3, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson3.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson3.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson3.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson3.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson3;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson3 = ReturnASandboxAchTransferDefaultApplicationJson3;
var ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum["FourHundredAndThree"] = "403";
})(ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum["EnvironmentMismatchError"] = "environment_mismatch_error";
})(ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson2 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson2, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson2.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson2.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson2.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson2;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson2 = ReturnASandboxAchTransferDefaultApplicationJson2;
var ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum["FourHundredAndFour"] = "404";
})(ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum;
(function (ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum) {
    ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum["ApiMethodNotFoundError"] = "api_method_not_found_error";
})(ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum = exports.ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum || (exports.ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum = {}));
var ReturnASandboxAchTransferDefaultApplicationJson1 = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferDefaultApplicationJson1, _super);
    function ReturnASandboxAchTransferDefaultApplicationJson1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "detail" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson1.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson1.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson1.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferDefaultApplicationJson1.prototype, "type", void 0);
    return ReturnASandboxAchTransferDefaultApplicationJson1;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferDefaultApplicationJson1 = ReturnASandboxAchTransferDefaultApplicationJson1;
var ReturnASandboxAchTransferResponse = /** @class */ (function (_super) {
    __extends(ReturnASandboxAchTransferResponse, _super);
    function ReturnASandboxAchTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReturnASandboxAchTransferResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReturnASandboxAchTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReturnASandboxAchTransferResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AchTransfer)
    ], ReturnASandboxAchTransferResponse.prototype, "achTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReturnASandboxAchTransferResponse.prototype, "error", void 0);
    return ReturnASandboxAchTransferResponse;
}(utils_1.SpeakeasyBase));
exports.ReturnASandboxAchTransferResponse = ReturnASandboxAchTransferResponse;
