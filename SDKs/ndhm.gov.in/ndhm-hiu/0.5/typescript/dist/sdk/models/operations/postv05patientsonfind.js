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
exports.PostV05PatientsOnFindResponse = exports.PostV05PatientsOnFindRequest = exports.PostV05PatientsOnFindRequests = exports.PostV05PatientsOnFindHeaders = exports.PostV05PatientsOnFindServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.PostV05PatientsOnFindServerList = [
    "https://dev.ndhm.gov.in/hiu",
];
var PostV05PatientsOnFindHeaders = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindHeaders, _super);
    function PostV05PatientsOnFindHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05PatientsOnFindHeaders.prototype, "authorization", void 0);
    return PostV05PatientsOnFindHeaders;
}(utils_1.SpeakeasyBase));
exports.PostV05PatientsOnFindHeaders = PostV05PatientsOnFindHeaders;
var PostV05PatientsOnFindRequests = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindRequests, _super);
    function PostV05PatientsOnFindRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsOnFindRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientIdentificationResponse)
    ], PostV05PatientsOnFindRequests.prototype, "patientIdentificationResponse", void 0);
    return PostV05PatientsOnFindRequests;
}(utils_1.SpeakeasyBase));
exports.PostV05PatientsOnFindRequests = PostV05PatientsOnFindRequests;
var PostV05PatientsOnFindRequest = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindRequest, _super);
    function PostV05PatientsOnFindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostV05PatientsOnFindRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV05PatientsOnFindHeaders)
    ], PostV05PatientsOnFindRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV05PatientsOnFindRequests)
    ], PostV05PatientsOnFindRequest.prototype, "request", void 0);
    return PostV05PatientsOnFindRequest;
}(utils_1.SpeakeasyBase));
exports.PostV05PatientsOnFindRequest = PostV05PatientsOnFindRequest;
var PostV05PatientsOnFindResponse = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindResponse, _super);
    function PostV05PatientsOnFindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsOnFindResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostV05PatientsOnFindResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05PatientsOnFindResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostV05PatientsOnFindResponse.prototype, "statusCode", void 0);
    return PostV05PatientsOnFindResponse;
}(utils_1.SpeakeasyBase));
exports.PostV05PatientsOnFindResponse = PostV05PatientsOnFindResponse;
