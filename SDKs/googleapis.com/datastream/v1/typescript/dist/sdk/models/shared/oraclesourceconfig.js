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
exports.OracleSourceConfig = void 0;
var utils_1 = require("../../../internal/utils");
var oraclerdbms_1 = require("./oraclerdbms");
// OracleSourceConfig
/**
 * Oracle data source configuration
**/
var OracleSourceConfig = /** @class */ (function (_super) {
    __extends(OracleSourceConfig, _super);
    function OracleSourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dropLargeObjects" }),
        __metadata("design:type", Object)
    ], OracleSourceConfig.prototype, "dropLargeObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=excludeObjects" }),
        __metadata("design:type", oraclerdbms_1.OracleRdbms)
    ], OracleSourceConfig.prototype, "excludeObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeObjects" }),
        __metadata("design:type", oraclerdbms_1.OracleRdbms)
    ], OracleSourceConfig.prototype, "includeObjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxConcurrentCdcTasks" }),
        __metadata("design:type", Number)
    ], OracleSourceConfig.prototype, "maxConcurrentCdcTasks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamLargeObjects" }),
        __metadata("design:type", Object)
    ], OracleSourceConfig.prototype, "streamLargeObjects", void 0);
    return OracleSourceConfig;
}(utils_1.SpeakeasyBase));
exports.OracleSourceConfig = OracleSourceConfig;
