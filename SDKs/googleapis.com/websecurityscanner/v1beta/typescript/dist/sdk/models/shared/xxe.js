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
exports.Xxe = exports.XxePayloadLocationEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Location within the request where the payload was placed.
 */
var XxePayloadLocationEnum;
(function (XxePayloadLocationEnum) {
    XxePayloadLocationEnum["LocationUnspecified"] = "LOCATION_UNSPECIFIED";
    XxePayloadLocationEnum["CompleteRequestBody"] = "COMPLETE_REQUEST_BODY";
})(XxePayloadLocationEnum = exports.XxePayloadLocationEnum || (exports.XxePayloadLocationEnum = {}));
/**
 * Information reported for an XXE.
 */
var Xxe = /** @class */ (function (_super) {
    __extends(Xxe, _super);
    function Xxe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "payloadLocation" }),
        __metadata("design:type", String)
    ], Xxe.prototype, "payloadLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "payloadValue" }),
        __metadata("design:type", String)
    ], Xxe.prototype, "payloadValue", void 0);
    return Xxe;
}(utils_1.SpeakeasyBase));
exports.Xxe = Xxe;
