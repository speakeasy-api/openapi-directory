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
exports.ResultStorage = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudstorage_1 = require("./googlecloudstorage");
var toolresultsexecution_1 = require("./toolresultsexecution");
var toolresultshistory_1 = require("./toolresultshistory");
// ResultStorage
/**
 * Locations where the results of running the test are stored.
**/
var ResultStorage = /** @class */ (function (_super) {
    __extends(ResultStorage, _super);
    function ResultStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleCloudStorage" }),
        __metadata("design:type", googlecloudstorage_1.GoogleCloudStorage)
    ], ResultStorage.prototype, "googleCloudStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resultsUrl" }),
        __metadata("design:type", String)
    ], ResultStorage.prototype, "resultsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toolResultsExecution" }),
        __metadata("design:type", toolresultsexecution_1.ToolResultsExecution)
    ], ResultStorage.prototype, "toolResultsExecution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toolResultsHistory" }),
        __metadata("design:type", toolresultshistory_1.ToolResultsHistory)
    ], ResultStorage.prototype, "toolResultsHistory", void 0);
    return ResultStorage;
}(utils_1.SpeakeasyBase));
exports.ResultStorage = ResultStorage;
