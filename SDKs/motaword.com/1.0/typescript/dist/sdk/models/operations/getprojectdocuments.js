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
exports.GetProjectDocumentsResponse = exports.GetProjectDocumentsRequest = exports.GetProjectDocumentsQueryParams = exports.GetProjectDocumentsWithEnum = exports.GetProjectDocumentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProjectDocumentsPathParams = /** @class */ (function (_super) {
    __extends(GetProjectDocumentsPathParams, _super);
    function GetProjectDocumentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", Number)
    ], GetProjectDocumentsPathParams.prototype, "projectId", void 0);
    return GetProjectDocumentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectDocumentsPathParams = GetProjectDocumentsPathParams;
var GetProjectDocumentsWithEnum;
(function (GetProjectDocumentsWithEnum) {
    GetProjectDocumentsWithEnum["Preview"] = "preview";
    GetProjectDocumentsWithEnum["Editors"] = "editors";
})(GetProjectDocumentsWithEnum = exports.GetProjectDocumentsWithEnum || (exports.GetProjectDocumentsWithEnum = {}));
var GetProjectDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectDocumentsQueryParams, _super);
    function GetProjectDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=with[]" }),
        __metadata("design:type", Array)
    ], GetProjectDocumentsQueryParams.prototype, "with", void 0);
    return GetProjectDocumentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectDocumentsQueryParams = GetProjectDocumentsQueryParams;
var GetProjectDocumentsRequest = /** @class */ (function (_super) {
    __extends(GetProjectDocumentsRequest, _super);
    function GetProjectDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectDocumentsPathParams)
    ], GetProjectDocumentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectDocumentsQueryParams)
    ], GetProjectDocumentsRequest.prototype, "queryParams", void 0);
    return GetProjectDocumentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetProjectDocumentsRequest = GetProjectDocumentsRequest;
var GetProjectDocumentsResponse = /** @class */ (function (_super) {
    __extends(GetProjectDocumentsResponse, _super);
    function GetProjectDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProjectDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DocumentList)
    ], GetProjectDocumentsResponse.prototype, "documentList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetProjectDocumentsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProjectDocumentsResponse.prototype, "statusCode", void 0);
    return GetProjectDocumentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetProjectDocumentsResponse = GetProjectDocumentsResponse;
