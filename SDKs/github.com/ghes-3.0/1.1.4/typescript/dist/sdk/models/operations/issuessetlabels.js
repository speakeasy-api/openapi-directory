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
exports.IssuesSetLabelsResponse = exports.IssuesSetLabelsRequest = exports.IssuesSetLabelsRequestBody4 = exports.IssuesSetLabelsRequestBody3 = exports.IssuesSetLabelsRequestBody3Labels = exports.IssuesSetLabelsRequestBody1 = exports.IssuesSetLabelsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IssuesSetLabelsPathParams = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsPathParams, _super);
    function IssuesSetLabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=issue_number" }),
        __metadata("design:type", Number)
    ], IssuesSetLabelsPathParams.prototype, "issueNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesSetLabelsPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesSetLabelsPathParams.prototype, "repo", void 0);
    return IssuesSetLabelsPathParams;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsPathParams = IssuesSetLabelsPathParams;
var IssuesSetLabelsRequestBody1 = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsRequestBody1, _super);
    function IssuesSetLabelsRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], IssuesSetLabelsRequestBody1.prototype, "labels", void 0);
    return IssuesSetLabelsRequestBody1;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsRequestBody1 = IssuesSetLabelsRequestBody1;
var IssuesSetLabelsRequestBody3Labels = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsRequestBody3Labels, _super);
    function IssuesSetLabelsRequestBody3Labels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssuesSetLabelsRequestBody3Labels.prototype, "name", void 0);
    return IssuesSetLabelsRequestBody3Labels;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsRequestBody3Labels = IssuesSetLabelsRequestBody3Labels;
var IssuesSetLabelsRequestBody3 = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsRequestBody3, _super);
    function IssuesSetLabelsRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels", elemType: IssuesSetLabelsRequestBody3Labels }),
        __metadata("design:type", Array)
    ], IssuesSetLabelsRequestBody3.prototype, "labels", void 0);
    return IssuesSetLabelsRequestBody3;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsRequestBody3 = IssuesSetLabelsRequestBody3;
var IssuesSetLabelsRequestBody4 = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsRequestBody4, _super);
    function IssuesSetLabelsRequestBody4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IssuesSetLabelsRequestBody4.prototype, "name", void 0);
    return IssuesSetLabelsRequestBody4;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsRequestBody4 = IssuesSetLabelsRequestBody4;
var IssuesSetLabelsRequest = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsRequest, _super);
    function IssuesSetLabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IssuesSetLabelsPathParams)
    ], IssuesSetLabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], IssuesSetLabelsRequest.prototype, "request", void 0);
    return IssuesSetLabelsRequest;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsRequest = IssuesSetLabelsRequest;
var IssuesSetLabelsResponse = /** @class */ (function (_super) {
    __extends(IssuesSetLabelsResponse, _super);
    function IssuesSetLabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IssuesSetLabelsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IssuesSetLabelsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], IssuesSetLabelsResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Label }),
        __metadata("design:type", Array)
    ], IssuesSetLabelsResponse.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], IssuesSetLabelsResponse.prototype, "validationError", void 0);
    return IssuesSetLabelsResponse;
}(utils_1.SpeakeasyBase));
exports.IssuesSetLabelsResponse = IssuesSetLabelsResponse;
