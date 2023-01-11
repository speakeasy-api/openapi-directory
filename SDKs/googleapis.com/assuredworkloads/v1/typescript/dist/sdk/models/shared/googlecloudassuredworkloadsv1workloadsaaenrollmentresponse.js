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
exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse = exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum = exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum;
(function (GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum) {
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum["SetupErrorUnspecified"] = "SETUP_ERROR_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorInvalidBaseSetup"] = "ERROR_INVALID_BASE_SETUP";
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorMissingExternalSigningKey"] = "ERROR_MISSING_EXTERNAL_SIGNING_KEY";
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorNotAllServicesEnrolled"] = "ERROR_NOT_ALL_SERVICES_ENROLLED";
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum["ErrorSetupCheckFailed"] = "ERROR_SETUP_CHECK_FAILED";
})(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum = exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum || (exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupErrorsEnum = {}));
var GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum;
(function (GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum) {
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum["SetupStateUnspecified"] = "SETUP_STATE_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum["StatusPending"] = "STATUS_PENDING";
    GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum["StatusComplete"] = "STATUS_COMPLETE";
})(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum = exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum || (exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponseSetupStatusEnum = {}));
// GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse
/**
 * Signed Access Approvals (SAA) enrollment response.
**/
var GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse, _super);
    function GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setupErrors" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse.prototype, "setupErrors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setupStatus" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse.prototype, "setupStatus", void 0);
    return GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
