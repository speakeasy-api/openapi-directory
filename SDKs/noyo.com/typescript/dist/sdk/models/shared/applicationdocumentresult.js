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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationDocumentResult = exports.ApplicationDocumentResultStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ApplicationDocumentResultStatusEnum;
(function (ApplicationDocumentResultStatusEnum) {
    ApplicationDocumentResultStatusEnum["Accepted"] = "accepted";
    ApplicationDocumentResultStatusEnum["InProgress"] = "in_progress";
    ApplicationDocumentResultStatusEnum["Incomplete"] = "incomplete";
    ApplicationDocumentResultStatusEnum["NoyoReview"] = "noyo_review";
    ApplicationDocumentResultStatusEnum["Rejected"] = "rejected";
    ApplicationDocumentResultStatusEnum["Submitted"] = "submitted";
    ApplicationDocumentResultStatusEnum["Wiped"] = "wiped";
})(ApplicationDocumentResultStatusEnum = exports.ApplicationDocumentResultStatusEnum || (exports.ApplicationDocumentResultStatusEnum = {}));
var ApplicationDocumentResult = /** @class */ (function (_super) {
    __extends(ApplicationDocumentResult, _super);
    function ApplicationDocumentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=application_id" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "applicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], ApplicationDocumentResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=document_type" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "documentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_upload_id" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "fileUploadId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], ApplicationDocumentResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], ApplicationDocumentResult.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_notes" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "statusNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=template_file_key" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "templateFileKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ApplicationDocumentResult.prototype, "version", void 0);
    return ApplicationDocumentResult;
}(utils_1.SpeakeasyBase));
exports.ApplicationDocumentResult = ApplicationDocumentResult;
