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
exports.PostCompanyEmployeesResponse = exports.PostCompanyEmployeesRequest = exports.PostCompanyEmployeesRequestBody = exports.PostCompanyEmployeesRequestBodyEmployeeGenderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostCompanyEmployeesRequestBodyEmployeeGenderEnum;
(function (PostCompanyEmployeesRequestBodyEmployeeGenderEnum) {
    PostCompanyEmployeesRequestBodyEmployeeGenderEnum["Male"] = "male";
    PostCompanyEmployeesRequestBodyEmployeeGenderEnum["Female"] = "female";
    PostCompanyEmployeesRequestBodyEmployeeGenderEnum["Diverse"] = "diverse";
})(PostCompanyEmployeesRequestBodyEmployeeGenderEnum = exports.PostCompanyEmployeesRequestBodyEmployeeGenderEnum || (exports.PostCompanyEmployeesRequestBodyEmployeeGenderEnum = {}));
var PostCompanyEmployeesRequestBody = /** @class */ (function (_super) {
    __extends(PostCompanyEmployeesRequestBody, _super);
    function PostCompanyEmployeesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[department];" }),
        __metadata("design:type", String)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeDepartment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[email];" }),
        __metadata("design:type", String)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[first_name];" }),
        __metadata("design:type", String)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[gender];" }),
        __metadata("design:type", String)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeGender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[hire_date];" }),
        __metadata("design:type", Date)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeHireDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[last_name];" }),
        __metadata("design:type", String)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[position];" }),
        __metadata("design:type", String)
    ], PostCompanyEmployeesRequestBody.prototype, "employeePosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=employee[weekly_hours];" }),
        __metadata("design:type", Number)
    ], PostCompanyEmployeesRequestBody.prototype, "employeeWeeklyHours", void 0);
    return PostCompanyEmployeesRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostCompanyEmployeesRequestBody = PostCompanyEmployeesRequestBody;
var PostCompanyEmployeesRequest = /** @class */ (function (_super) {
    __extends(PostCompanyEmployeesRequest, _super);
    function PostCompanyEmployeesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", PostCompanyEmployeesRequestBody)
    ], PostCompanyEmployeesRequest.prototype, "request", void 0);
    return PostCompanyEmployeesRequest;
}(utils_1.SpeakeasyBase));
exports.PostCompanyEmployeesRequest = PostCompanyEmployeesRequest;
var PostCompanyEmployeesResponse = /** @class */ (function (_super) {
    __extends(PostCompanyEmployeesResponse, _super);
    function PostCompanyEmployeesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCompanyEmployeesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Response)
    ], PostCompanyEmployeesResponse.prototype, "response", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCompanyEmployeesResponse.prototype, "statusCode", void 0);
    return PostCompanyEmployeesResponse;
}(utils_1.SpeakeasyBase));
exports.PostCompanyEmployeesResponse = PostCompanyEmployeesResponse;
