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
exports.CancelBookingResponse = exports.CancelBookingRequest = exports.CancelBooking404ApplicationJson = exports.CancelBooking404ApplicationJsonMessageEnum = exports.CancelBooking404ApplicationJsonCodeEnum = exports.CancelBooking400ApplicationJson = exports.CancelBooking400ApplicationJsonMessageEnum = exports.CancelBooking400ApplicationJsonCodeEnum = exports.CancelBookingHeaders = exports.CancelBookingPathParams = exports.CancelBookingServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.CancelBookingServerList = [
    "https://api.sandbox.viator.com/partner",
];
var CancelBookingPathParams = /** @class */ (function (_super) {
    __extends(CancelBookingPathParams, _super);
    function CancelBookingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=booking-reference" }),
        __metadata("design:type", String)
    ], CancelBookingPathParams.prototype, "bookingReference", void 0);
    return CancelBookingPathParams;
}(utils_1.SpeakeasyBase));
exports.CancelBookingPathParams = CancelBookingPathParams;
var CancelBookingHeaders = /** @class */ (function (_super) {
    __extends(CancelBookingHeaders, _super);
    function CancelBookingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], CancelBookingHeaders.prototype, "acceptLanguage", void 0);
    return CancelBookingHeaders;
}(utils_1.SpeakeasyBase));
exports.CancelBookingHeaders = CancelBookingHeaders;
var CancelBooking400ApplicationJsonCodeEnum;
(function (CancelBooking400ApplicationJsonCodeEnum) {
    CancelBooking400ApplicationJsonCodeEnum["BadRequest"] = "BAD_REQUEST";
})(CancelBooking400ApplicationJsonCodeEnum = exports.CancelBooking400ApplicationJsonCodeEnum || (exports.CancelBooking400ApplicationJsonCodeEnum = {}));
var CancelBooking400ApplicationJsonMessageEnum;
(function (CancelBooking400ApplicationJsonMessageEnum) {
    CancelBooking400ApplicationJsonMessageEnum["MissingCancellationReason"] = "Missing cancellation reason";
})(CancelBooking400ApplicationJsonMessageEnum = exports.CancelBooking400ApplicationJsonMessageEnum || (exports.CancelBooking400ApplicationJsonMessageEnum = {}));
var CancelBooking400ApplicationJson = /** @class */ (function (_super) {
    __extends(CancelBooking400ApplicationJson, _super);
    function CancelBooking400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CancelBooking400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CancelBooking400ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], CancelBooking400ApplicationJson.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingId" }),
        __metadata("design:type", String)
    ], CancelBooking400ApplicationJson.prototype, "trackingId", void 0);
    return CancelBooking400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CancelBooking400ApplicationJson = CancelBooking400ApplicationJson;
var CancelBooking404ApplicationJsonCodeEnum;
(function (CancelBooking404ApplicationJsonCodeEnum) {
    CancelBooking404ApplicationJsonCodeEnum["NotFound"] = "NOT_FOUND";
})(CancelBooking404ApplicationJsonCodeEnum = exports.CancelBooking404ApplicationJsonCodeEnum || (exports.CancelBooking404ApplicationJsonCodeEnum = {}));
var CancelBooking404ApplicationJsonMessageEnum;
(function (CancelBooking404ApplicationJsonMessageEnum) {
    CancelBooking404ApplicationJsonMessageEnum["BookingNotFound"] = "Booking not found";
})(CancelBooking404ApplicationJsonMessageEnum = exports.CancelBooking404ApplicationJsonMessageEnum || (exports.CancelBooking404ApplicationJsonMessageEnum = {}));
var CancelBooking404ApplicationJson = /** @class */ (function (_super) {
    __extends(CancelBooking404ApplicationJson, _super);
    function CancelBooking404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CancelBooking404ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CancelBooking404ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], CancelBooking404ApplicationJson.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingId" }),
        __metadata("design:type", String)
    ], CancelBooking404ApplicationJson.prototype, "trackingId", void 0);
    return CancelBooking404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CancelBooking404ApplicationJson = CancelBooking404ApplicationJson;
var CancelBookingRequest = /** @class */ (function (_super) {
    __extends(CancelBookingRequest, _super);
    function CancelBookingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CancelBookingRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBookingPathParams)
    ], CancelBookingRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBookingHeaders)
    ], CancelBookingRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CancellationRequest)
    ], CancelBookingRequest.prototype, "request", void 0);
    return CancelBookingRequest;
}(utils_1.SpeakeasyBase));
exports.CancelBookingRequest = CancelBookingRequest;
var CancelBookingResponse = /** @class */ (function (_super) {
    __extends(CancelBookingResponse, _super);
    function CancelBookingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndOneUnauthorized)
    ], CancelBookingResponse.prototype, "fourHundredAndOneUNAUTHORIZED", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndSixNotAcceptable)
    ], CancelBookingResponse.prototype, "fourHundredAndSixNOTACCEPTABLE", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FiveHundredInternalServerError)
    ], CancelBookingResponse.prototype, "fiveHundredINTERNALSERVERERROR", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FiveHundredAndThreeServiceUnavailable)
    ], CancelBookingResponse.prototype, "fiveHundredAndThreeSERVICEUNAVAILABLE", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CancelBookingResponse)
    ], CancelBookingResponse.prototype, "cancelBookingResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CancelBookingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CancelBookingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBooking400ApplicationJson)
    ], CancelBookingResponse.prototype, "cancelBooking400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBooking404ApplicationJson)
    ], CancelBookingResponse.prototype, "cancelBooking404ApplicationJSONObject", void 0);
    return CancelBookingResponse;
}(utils_1.SpeakeasyBase));
exports.CancelBookingResponse = CancelBookingResponse;
