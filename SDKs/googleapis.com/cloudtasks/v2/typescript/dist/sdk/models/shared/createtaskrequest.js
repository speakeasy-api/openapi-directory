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
exports.CreateTaskRequest = exports.CreateTaskRequestResponseViewEnum = void 0;
var utils_1 = require("../../../internal/utils");
var task_1 = require("./task");
var class_transformer_1 = require("class-transformer");
/**
 * The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.
 */
var CreateTaskRequestResponseViewEnum;
(function (CreateTaskRequestResponseViewEnum) {
    CreateTaskRequestResponseViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    CreateTaskRequestResponseViewEnum["Basic"] = "BASIC";
    CreateTaskRequestResponseViewEnum["Full"] = "FULL";
})(CreateTaskRequestResponseViewEnum = exports.CreateTaskRequestResponseViewEnum || (exports.CreateTaskRequestResponseViewEnum = {}));
/**
 * Request message for CreateTask.
 */
var CreateTaskRequest = /** @class */ (function (_super) {
    __extends(CreateTaskRequest, _super);
    function CreateTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "responseView" }),
        __metadata("design:type", String)
    ], CreateTaskRequest.prototype, "responseView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "task" }),
        (0, class_transformer_1.Type)(function () { return task_1.Task; }),
        __metadata("design:type", task_1.Task)
    ], CreateTaskRequest.prototype, "task", void 0);
    return CreateTaskRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTaskRequest = CreateTaskRequest;
