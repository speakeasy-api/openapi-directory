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
exports.PaginatedAgentLocationResult = exports.PaginatedAgentLocationResultMeta = void 0;
var utils_1 = require("../../../internal/utils");
var agentlocationresult_1 = require("./agentlocationresult");
// PaginatedAgentLocationResultMeta
/**
 * Metadata associated with the response data
**/
var PaginatedAgentLocationResultMeta = /** @class */ (function (_super) {
    __extends(PaginatedAgentLocationResultMeta, _super);
    function PaginatedAgentLocationResultMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], PaginatedAgentLocationResultMeta.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_num" }),
        __metadata("design:type", Number)
    ], PaginatedAgentLocationResultMeta.prototype, "pageNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PaginatedAgentLocationResultMeta.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], PaginatedAgentLocationResultMeta.prototype, "totalRecords", void 0);
    return PaginatedAgentLocationResultMeta;
}(utils_1.SpeakeasyBase));
exports.PaginatedAgentLocationResultMeta = PaginatedAgentLocationResultMeta;
var PaginatedAgentLocationResult = /** @class */ (function (_super) {
    __extends(PaginatedAgentLocationResult, _super);
    function PaginatedAgentLocationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", PaginatedAgentLocationResultMeta)
    ], PaginatedAgentLocationResult.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response", elemType: agentlocationresult_1.AgentLocationResult }),
        __metadata("design:type", Array)
    ], PaginatedAgentLocationResult.prototype, "response", void 0);
    return PaginatedAgentLocationResult;
}(utils_1.SpeakeasyBase));
exports.PaginatedAgentLocationResult = PaginatedAgentLocationResult;
