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
exports.V4CreatePayeeResponse = exports.V4CreatePayeeRequest = exports.V4CreatePayeeRequestsInput = exports.V4CreatePayeeMultipartFormData = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var V4CreatePayeeMultipartFormData = /** @class */ (function (_super) {
    __extends(V4CreatePayeeMultipartFormData, _super);
    function V4CreatePayeeMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=file;json=true", elemType: shared.CreatePayeesCsvRequest2 }),
        __metadata("design:type", Array)
    ], V4CreatePayeeMultipartFormData.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=payorId" }),
        __metadata("design:type", String)
    ], V4CreatePayeeMultipartFormData.prototype, "payorId", void 0);
    return V4CreatePayeeMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.V4CreatePayeeMultipartFormData = V4CreatePayeeMultipartFormData;
var V4CreatePayeeRequestsInput = /** @class */ (function (_super) {
    __extends(V4CreatePayeeRequestsInput, _super);
    function V4CreatePayeeRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreatePayeesRequest2Input)
    ], V4CreatePayeeRequestsInput.prototype, "createPayeesRequest2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", V4CreatePayeeMultipartFormData)
    ], V4CreatePayeeRequestsInput.prototype, "object", void 0);
    return V4CreatePayeeRequestsInput;
}(utils_1.SpeakeasyBase));
exports.V4CreatePayeeRequestsInput = V4CreatePayeeRequestsInput;
var V4CreatePayeeRequest = /** @class */ (function (_super) {
    __extends(V4CreatePayeeRequest, _super);
    function V4CreatePayeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", V4CreatePayeeRequestsInput)
    ], V4CreatePayeeRequest.prototype, "request", void 0);
    return V4CreatePayeeRequest;
}(utils_1.SpeakeasyBase));
exports.V4CreatePayeeRequest = V4CreatePayeeRequest;
var V4CreatePayeeResponse = /** @class */ (function (_super) {
    __extends(V4CreatePayeeResponse, _super);
    function V4CreatePayeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], V4CreatePayeeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreatePayeesCsvResponse2)
    ], V4CreatePayeeResponse.prototype, "createPayeesCSVResponse2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], V4CreatePayeeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], V4CreatePayeeResponse.prototype, "inlineResponse400", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], V4CreatePayeeResponse.prototype, "inlineResponse401", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], V4CreatePayeeResponse.prototype, "inlineResponse403", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], V4CreatePayeeResponse.prototype, "inlineResponse404", void 0);
    return V4CreatePayeeResponse;
}(utils_1.SpeakeasyBase));
exports.V4CreatePayeeResponse = V4CreatePayeeResponse;
