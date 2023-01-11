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
exports.GoogleCloudRecommenderV1Impact = exports.GoogleCloudRecommenderV1ImpactCategoryEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudrecommenderv1costprojection_1 = require("./googlecloudrecommenderv1costprojection");
var googlecloudrecommenderv1reliabilityprojection_1 = require("./googlecloudrecommenderv1reliabilityprojection");
var googlecloudrecommenderv1securityprojection_1 = require("./googlecloudrecommenderv1securityprojection");
var googlecloudrecommenderv1sustainabilityprojection_1 = require("./googlecloudrecommenderv1sustainabilityprojection");
var GoogleCloudRecommenderV1ImpactCategoryEnum;
(function (GoogleCloudRecommenderV1ImpactCategoryEnum) {
    GoogleCloudRecommenderV1ImpactCategoryEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    GoogleCloudRecommenderV1ImpactCategoryEnum["Cost"] = "COST";
    GoogleCloudRecommenderV1ImpactCategoryEnum["Security"] = "SECURITY";
    GoogleCloudRecommenderV1ImpactCategoryEnum["Performance"] = "PERFORMANCE";
    GoogleCloudRecommenderV1ImpactCategoryEnum["Manageability"] = "MANAGEABILITY";
    GoogleCloudRecommenderV1ImpactCategoryEnum["Sustainability"] = "SUSTAINABILITY";
    GoogleCloudRecommenderV1ImpactCategoryEnum["Reliability"] = "RELIABILITY";
})(GoogleCloudRecommenderV1ImpactCategoryEnum = exports.GoogleCloudRecommenderV1ImpactCategoryEnum || (exports.GoogleCloudRecommenderV1ImpactCategoryEnum = {}));
// GoogleCloudRecommenderV1Impact
/**
 * Contains the impact a recommendation can have for a given category.
**/
var GoogleCloudRecommenderV1Impact = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommenderV1Impact, _super);
    function GoogleCloudRecommenderV1Impact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Impact.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costProjection" }),
        __metadata("design:type", googlecloudrecommenderv1costprojection_1.GoogleCloudRecommenderV1CostProjection)
    ], GoogleCloudRecommenderV1Impact.prototype, "costProjection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reliabilityProjection" }),
        __metadata("design:type", googlecloudrecommenderv1reliabilityprojection_1.GoogleCloudRecommenderV1ReliabilityProjection)
    ], GoogleCloudRecommenderV1Impact.prototype, "reliabilityProjection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityProjection" }),
        __metadata("design:type", googlecloudrecommenderv1securityprojection_1.GoogleCloudRecommenderV1SecurityProjection)
    ], GoogleCloudRecommenderV1Impact.prototype, "securityProjection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sustainabilityProjection" }),
        __metadata("design:type", googlecloudrecommenderv1sustainabilityprojection_1.GoogleCloudRecommenderV1SustainabilityProjection)
    ], GoogleCloudRecommenderV1Impact.prototype, "sustainabilityProjection", void 0);
    return GoogleCloudRecommenderV1Impact;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecommenderV1Impact = GoogleCloudRecommenderV1Impact;
