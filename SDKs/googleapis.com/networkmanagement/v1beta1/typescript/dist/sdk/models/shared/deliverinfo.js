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
exports.DeliverInfo = exports.DeliverInfoTargetEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Target type where the packet is delivered to.
 */
var DeliverInfoTargetEnum;
(function (DeliverInfoTargetEnum) {
    DeliverInfoTargetEnum["TargetUnspecified"] = "TARGET_UNSPECIFIED";
    DeliverInfoTargetEnum["Instance"] = "INSTANCE";
    DeliverInfoTargetEnum["Internet"] = "INTERNET";
    DeliverInfoTargetEnum["GoogleApi"] = "GOOGLE_API";
    DeliverInfoTargetEnum["GkeMaster"] = "GKE_MASTER";
    DeliverInfoTargetEnum["CloudSqlInstance"] = "CLOUD_SQL_INSTANCE";
    DeliverInfoTargetEnum["PscPublishedService"] = "PSC_PUBLISHED_SERVICE";
    DeliverInfoTargetEnum["PscGoogleApi"] = "PSC_GOOGLE_API";
    DeliverInfoTargetEnum["PscVpcSc"] = "PSC_VPC_SC";
    DeliverInfoTargetEnum["ServerlessNeg"] = "SERVERLESS_NEG";
})(DeliverInfoTargetEnum = exports.DeliverInfoTargetEnum || (exports.DeliverInfoTargetEnum = {}));
/**
 * Details of the final state "deliver" and associated resource.
 */
var DeliverInfo = /** @class */ (function (_super) {
    __extends(DeliverInfo, _super);
    function DeliverInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "resourceUri" }),
        __metadata("design:type", String)
    ], DeliverInfo.prototype, "resourceUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "target" }),
        __metadata("design:type", String)
    ], DeliverInfo.prototype, "target", void 0);
    return DeliverInfo;
}(utils_1.SpeakeasyBase));
exports.DeliverInfo = DeliverInfo;
