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
exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership = exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum = exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum;
(function (GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum) {
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnspecified"] = "MEMBERSHIP_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipIncluded"] = "MEMBERSHIP_INCLUDED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipNotIncluded"] = "MEMBERSHIP_NOT_INCLUDED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnknownInfoDenied"] = "MEMBERSHIP_UNKNOWN_INFO_DENIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnknownUnsupported"] = "MEMBERSHIP_UNKNOWN_UNSUPPORTED";
})(GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum = exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum || (exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipMembershipEnum = {}));
var GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum;
(function (GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum) {
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum = exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum || (exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembershipRelevanceEnum = {}));
var GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership, _super);
    function GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=membership" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership.prototype, "membership", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership.prototype, "relevance", void 0);
    return GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership = GoogleCloudPolicysimulatorV1beta1BindingExplanationAnnotatedMembership;
