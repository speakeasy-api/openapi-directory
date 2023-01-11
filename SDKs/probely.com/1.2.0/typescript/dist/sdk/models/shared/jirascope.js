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
exports.JiraScope = void 0;
var utils_1 = require("../../../internal/utils");
var jiraprioritymapping_1 = require("./jiraprioritymapping");
var jirastatusmapping_1 = require("./jirastatusmapping");
var JiraScope = /** @class */ (function (_super) {
    __extends(JiraScope, _super);
    function JiraScope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_jira" }),
        __metadata("design:type", Boolean)
    ], JiraScope.prototype, "allowJira", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_sync" }),
        __metadata("design:type", Boolean)
    ], JiraScope.prototype, "autoSync", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_type_id" }),
        __metadata("design:type", String)
    ], JiraScope.prototype, "issueTypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priority_mapping" }),
        __metadata("design:type", jiraprioritymapping_1.JiraPriorityMapping)
    ], JiraScope.prototype, "priorityMapping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project_id" }),
        __metadata("design:type", String)
    ], JiraScope.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_mapping" }),
        __metadata("design:type", jirastatusmapping_1.JiraStatusMapping)
    ], JiraScope.prototype, "statusMapping", void 0);
    return JiraScope;
}(utils_1.SpeakeasyBase));
exports.JiraScope = JiraScope;
