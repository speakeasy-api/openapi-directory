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
exports.ListInboundSsoAssignmentsResponse = void 0;
var utils_1 = require("../../../internal/utils");
var inboundssoassignment_1 = require("./inboundssoassignment");
var class_transformer_1 = require("class-transformer");
/**
 * Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
 */
var ListInboundSsoAssignmentsResponse = /** @class */ (function (_super) {
    __extends(ListInboundSsoAssignmentsResponse, _super);
    function ListInboundSsoAssignmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: inboundssoassignment_1.InboundSsoAssignment }),
        (0, class_transformer_1.Expose)({ name: "inboundSsoAssignments" }),
        (0, class_transformer_1.Type)(function () { return inboundssoassignment_1.InboundSsoAssignment; }),
        __metadata("design:type", Array)
    ], ListInboundSsoAssignmentsResponse.prototype, "inboundSsoAssignments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nextPageToken" }),
        __metadata("design:type", String)
    ], ListInboundSsoAssignmentsResponse.prototype, "nextPageToken", void 0);
    return ListInboundSsoAssignmentsResponse;
}(utils_1.SpeakeasyBase));
exports.ListInboundSsoAssignmentsResponse = ListInboundSsoAssignmentsResponse;
