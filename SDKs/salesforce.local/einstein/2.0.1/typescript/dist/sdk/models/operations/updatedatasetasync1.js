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
exports.UpdateDatasetAsync1Response = exports.UpdateDatasetAsync1Request = exports.UpdateDatasetAsync1Security = exports.UpdateDatasetAsync1RequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateDatasetAsync1RequestBody = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1RequestBody, _super);
    function UpdateDatasetAsync1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync1RequestBody.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=modelId" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsync1RequestBody.prototype, "modelId", void 0);
    return UpdateDatasetAsync1RequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync1RequestBody = UpdateDatasetAsync1RequestBody;
var UpdateDatasetAsync1Security = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1Security, _super);
    function UpdateDatasetAsync1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UpdateDatasetAsync1Security.prototype, "bearerToken", void 0);
    return UpdateDatasetAsync1Security;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync1Security = UpdateDatasetAsync1Security;
var UpdateDatasetAsync1Request = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1Request, _super);
    function UpdateDatasetAsync1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateDatasetAsync1RequestBody)
    ], UpdateDatasetAsync1Request.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateDatasetAsync1Security)
    ], UpdateDatasetAsync1Request.prototype, "security", void 0);
    return UpdateDatasetAsync1Request;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync1Request = UpdateDatasetAsync1Request;
var UpdateDatasetAsync1Response = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsync1Response, _super);
    function UpdateDatasetAsync1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateDatasetAsync1Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Dataset)
    ], UpdateDatasetAsync1Response.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateDatasetAsync1Response.prototype, "statusCode", void 0);
    return UpdateDatasetAsync1Response;
}(utils_1.SpeakeasyBase));
exports.UpdateDatasetAsync1Response = UpdateDatasetAsync1Response;
