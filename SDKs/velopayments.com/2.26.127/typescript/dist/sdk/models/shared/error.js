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
exports.ErrorT = exports.ErrorLocationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var errordata_1 = require("./errordata");
var localisationdetails_1 = require("./localisationdetails");
var ErrorLocationTypeEnum;
(function (ErrorLocationTypeEnum) {
    ErrorLocationTypeEnum["RequestBody"] = "requestBody";
    ErrorLocationTypeEnum["QueryParam"] = "queryParam";
    ErrorLocationTypeEnum["RequestParam"] = "requestParam";
    ErrorLocationTypeEnum["Header"] = "header";
    ErrorLocationTypeEnum["PathParam"] = "pathParam";
})(ErrorLocationTypeEnum = exports.ErrorLocationTypeEnum || (exports.ErrorLocationTypeEnum = {}));
var ErrorT = /** @class */ (function (_super) {
    __extends(ErrorT, _super);
    function ErrorT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorCode" }),
        __metadata("design:type", String)
    ], ErrorT.prototype, "errorCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorData" }),
        __metadata("design:type", errordata_1.ErrorData)
    ], ErrorT.prototype, "errorData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], ErrorT.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localisationDetails" }),
        __metadata("design:type", localisationdetails_1.LocalisationDetails)
    ], ErrorT.prototype, "localisationDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ErrorT.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], ErrorT.prototype, "locationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasonCode" }),
        __metadata("design:type", String)
    ], ErrorT.prototype, "reasonCode", void 0);
    return ErrorT;
}(utils_1.SpeakeasyBase));
exports.ErrorT = ErrorT;
