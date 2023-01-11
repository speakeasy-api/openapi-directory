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
exports.PaginatedEmployeeResult = exports.PaginatedEmployeeResultMeta = void 0;
var utils_1 = require("../../../internal/utils");
var employeeresult_1 = require("./employeeresult");
// PaginatedEmployeeResultMeta
/**
 * Metadata associated with the response data
**/
var PaginatedEmployeeResultMeta = /** @class */ (function (_super) {
    __extends(PaginatedEmployeeResultMeta, _super);
    function PaginatedEmployeeResultMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], PaginatedEmployeeResultMeta.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_num" }),
        __metadata("design:type", Number)
    ], PaginatedEmployeeResultMeta.prototype, "pageNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PaginatedEmployeeResultMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], PaginatedEmployeeResultMeta.prototype, "totalRecords", void 0);
    return PaginatedEmployeeResultMeta;
}(utils_1.SpeakeasyBase));
exports.PaginatedEmployeeResultMeta = PaginatedEmployeeResultMeta;
var PaginatedEmployeeResult = /** @class */ (function (_super) {
    __extends(PaginatedEmployeeResult, _super);
    function PaginatedEmployeeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", PaginatedEmployeeResultMeta)
    ], PaginatedEmployeeResult.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response", elemType: employeeresult_1.EmployeeResult }),
        __metadata("design:type", Array)
    ], PaginatedEmployeeResult.prototype, "response", void 0);
    return PaginatedEmployeeResult;
}(utils_1.SpeakeasyBase));
exports.PaginatedEmployeeResult = PaginatedEmployeeResult;
