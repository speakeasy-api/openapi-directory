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
exports.PutLabelsIdResponse = exports.PutLabelsIdRequest = exports.PutLabelsId404ApplicationJson = exports.PutLabelsId401ApplicationJson = exports.PutLabelsId400ApplicationJson = exports.PutLabelsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutLabelsIdPathParams = /** @class */ (function (_super) {
    __extends(PutLabelsIdPathParams, _super);
    function PutLabelsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutLabelsIdPathParams.prototype, "id", void 0);
    return PutLabelsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PutLabelsIdPathParams = PutLabelsIdPathParams;
var PutLabelsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(PutLabelsId400ApplicationJson, _super);
    function PutLabelsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=<field name>" }),
        __metadata("design:type", Array)
    ], PutLabelsId400ApplicationJson.prototype, "lessThanFieldNameGreaterThan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=non_field_errors" }),
        __metadata("design:type", Array)
    ], PutLabelsId400ApplicationJson.prototype, "nonFieldErrors", void 0);
    return PutLabelsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutLabelsId400ApplicationJson = PutLabelsId400ApplicationJson;
var PutLabelsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutLabelsId401ApplicationJson, _super);
    function PutLabelsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutLabelsId401ApplicationJson.prototype, "detail", void 0);
    return PutLabelsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutLabelsId401ApplicationJson = PutLabelsId401ApplicationJson;
var PutLabelsId404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutLabelsId404ApplicationJson, _super);
    function PutLabelsId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutLabelsId404ApplicationJson.prototype, "detail", void 0);
    return PutLabelsId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PutLabelsId404ApplicationJson = PutLabelsId404ApplicationJson;
var PutLabelsIdRequest = /** @class */ (function (_super) {
    __extends(PutLabelsIdRequest, _super);
    function PutLabelsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutLabelsIdPathParams)
    ], PutLabelsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LabelInput)
    ], PutLabelsIdRequest.prototype, "request", void 0);
    return PutLabelsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PutLabelsIdRequest = PutLabelsIdRequest;
var PutLabelsIdResponse = /** @class */ (function (_super) {
    __extends(PutLabelsIdResponse, _super);
    function PutLabelsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutLabelsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Label)
    ], PutLabelsIdResponse.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutLabelsIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutLabelsId400ApplicationJson)
    ], PutLabelsIdResponse.prototype, "putLabelsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutLabelsId401ApplicationJson)
    ], PutLabelsIdResponse.prototype, "putLabelsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutLabelsId404ApplicationJson)
    ], PutLabelsIdResponse.prototype, "putLabelsId404ApplicationJSONObject", void 0);
    return PutLabelsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PutLabelsIdResponse = PutLabelsIdResponse;
