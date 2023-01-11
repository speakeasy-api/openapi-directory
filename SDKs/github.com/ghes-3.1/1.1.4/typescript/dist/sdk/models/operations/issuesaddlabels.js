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
exports.IssuesAddLabelsResponse = exports.IssuesAddLabelsRequest = exports.IssuesAddLabelsRequestBody4 = exports.IssuesAddLabelsRequestBody3 = exports.IssuesAddLabelsRequestBody3Labels = exports.IssuesAddLabelsRequestBody1 = exports.IssuesAddLabelsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IssuesAddLabelsPathParams = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsPathParams, _super);
    function IssuesAddLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=issue_number" }),
        __metadata("design:type", Number)
    ], IssuesAddLabelsPathParams.prototype, "issueNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesAddLabelsPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesAddLabelsPathParams.prototype, "repo", void 0);
    return IssuesAddLabelsPathParams;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsPathParams = IssuesAddLabelsPathParams;
var IssuesAddLabelsRequestBody1 = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequestBody1, _super);
    function IssuesAddLabelsRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], IssuesAddLabelsRequestBody1.prototype, "labels", void 0);
    return IssuesAddLabelsRequestBody1;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsRequestBody1 = IssuesAddLabelsRequestBody1;
var IssuesAddLabelsRequestBody3Labels = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequestBody3Labels, _super);
    function IssuesAddLabelsRequestBody3Labels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssuesAddLabelsRequestBody3Labels.prototype, "name", void 0);
    return IssuesAddLabelsRequestBody3Labels;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsRequestBody3Labels = IssuesAddLabelsRequestBody3Labels;
var IssuesAddLabelsRequestBody3 = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequestBody3, _super);
    function IssuesAddLabelsRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels", elemType: IssuesAddLabelsRequestBody3Labels }),
        __metadata("design:type", Array)
    ], IssuesAddLabelsRequestBody3.prototype, "labels", void 0);
    return IssuesAddLabelsRequestBody3;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsRequestBody3 = IssuesAddLabelsRequestBody3;
var IssuesAddLabelsRequestBody4 = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequestBody4, _super);
    function IssuesAddLabelsRequestBody4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssuesAddLabelsRequestBody4.prototype, "name", void 0);
    return IssuesAddLabelsRequestBody4;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsRequestBody4 = IssuesAddLabelsRequestBody4;
var IssuesAddLabelsRequest = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsRequest, _super);
    function IssuesAddLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IssuesAddLabelsPathParams)
    ], IssuesAddLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], IssuesAddLabelsRequest.prototype, "request", void 0);
    return IssuesAddLabelsRequest;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsRequest = IssuesAddLabelsRequest;
var IssuesAddLabelsResponse = /** @class */ (function (_super) {
    __extends(IssuesAddLabelsResponse, _super);
    function IssuesAddLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IssuesAddLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IssuesAddLabelsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], IssuesAddLabelsResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Label }),
        __metadata("design:type", Array)
    ], IssuesAddLabelsResponse.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesAddLabelsResponse.prototype, "validationError", void 0);
    return IssuesAddLabelsResponse;
}(utils_1.SpeakeasyBase));
exports.IssuesAddLabelsResponse = IssuesAddLabelsResponse;
