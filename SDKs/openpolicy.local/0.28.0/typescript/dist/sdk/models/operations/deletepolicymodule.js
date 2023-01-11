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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePolicyModuleResponse = exports.DeletePolicyModuleRequest = exports.DeletePolicyModule200ApplicationJson = exports.DeletePolicyModule200ApplicationJsonProvenance = exports.DeletePolicyModule200ApplicationJsonMetrics = exports.DeletePolicyModule200ApplicationJsonExplanation = exports.DeletePolicyModule200ApplicationJsonExplanationTypeEnum = exports.DeletePolicyModule200ApplicationJsonExplanationOpEnum = exports.DeletePolicyModule200ApplicationJsonExplanationNode = exports.DeletePolicyModule200ApplicationJsonExplanationNodeTerms = exports.DeletePolicyModule200ApplicationJsonExplanationLocals = exports.DeletePolicyModule200ApplicationJsonExplanationLocalsValue = exports.DeletePolicyModule200ApplicationJsonExplanationLocalsKey = exports.DeletePolicyModuleQueryParams = exports.DeletePolicyModulePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeletePolicyModulePathParams = /** @class */ (function (_super) {
    __extends(DeletePolicyModulePathParams, _super);
    function DeletePolicyModulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeletePolicyModulePathParams.prototype, "id", void 0);
    return DeletePolicyModulePathParams;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModulePathParams = DeletePolicyModulePathParams;
var DeletePolicyModuleQueryParams = /** @class */ (function (_super) {
    __extends(DeletePolicyModuleQueryParams, _super);
    function DeletePolicyModuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], DeletePolicyModuleQueryParams.prototype, "pretty", void 0);
    return DeletePolicyModuleQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModuleQueryParams = DeletePolicyModuleQueryParams;
var DeletePolicyModule200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonExplanationLocalsKey, _super);
    function DeletePolicyModule200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return DeletePolicyModule200ApplicationJsonExplanationLocalsKey;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonExplanationLocalsKey = DeletePolicyModule200ApplicationJsonExplanationLocalsKey;
var DeletePolicyModule200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonExplanationLocalsValue, _super);
    function DeletePolicyModule200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return DeletePolicyModule200ApplicationJsonExplanationLocalsValue;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonExplanationLocalsValue = DeletePolicyModule200ApplicationJsonExplanationLocalsValue;
var DeletePolicyModule200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonExplanationLocals, _super);
    function DeletePolicyModule200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", DeletePolicyModule200ApplicationJsonExplanationLocalsKey)
    ], DeletePolicyModule200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", DeletePolicyModule200ApplicationJsonExplanationLocalsValue)
    ], DeletePolicyModule200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return DeletePolicyModule200ApplicationJsonExplanationLocals;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonExplanationLocals = DeletePolicyModule200ApplicationJsonExplanationLocals;
var DeletePolicyModule200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonExplanationNodeTerms, _super);
    function DeletePolicyModule200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return DeletePolicyModule200ApplicationJsonExplanationNodeTerms;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonExplanationNodeTerms = DeletePolicyModule200ApplicationJsonExplanationNodeTerms;
// DeletePolicyModule200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var DeletePolicyModule200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonExplanationNode, _super);
    function DeletePolicyModule200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terms", elemType: DeletePolicyModule200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], DeletePolicyModule200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return DeletePolicyModule200ApplicationJsonExplanationNode;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonExplanationNode = DeletePolicyModule200ApplicationJsonExplanationNode;
var DeletePolicyModule200ApplicationJsonExplanationOpEnum;
(function (DeletePolicyModule200ApplicationJsonExplanationOpEnum) {
    DeletePolicyModule200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    DeletePolicyModule200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    DeletePolicyModule200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    DeletePolicyModule200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    DeletePolicyModule200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(DeletePolicyModule200ApplicationJsonExplanationOpEnum = exports.DeletePolicyModule200ApplicationJsonExplanationOpEnum || (exports.DeletePolicyModule200ApplicationJsonExplanationOpEnum = {}));
var DeletePolicyModule200ApplicationJsonExplanationTypeEnum;
(function (DeletePolicyModule200ApplicationJsonExplanationTypeEnum) {
    DeletePolicyModule200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    DeletePolicyModule200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    DeletePolicyModule200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(DeletePolicyModule200ApplicationJsonExplanationTypeEnum = exports.DeletePolicyModule200ApplicationJsonExplanationTypeEnum || (exports.DeletePolicyModule200ApplicationJsonExplanationTypeEnum = {}));
var DeletePolicyModule200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonExplanation, _super);
    function DeletePolicyModule200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locals", elemType: DeletePolicyModule200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], DeletePolicyModule200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node" }),
        __metadata("design:type", DeletePolicyModule200ApplicationJsonExplanationNode)
    ], DeletePolicyModule200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonExplanation.prototype, "type", void 0);
    return DeletePolicyModule200ApplicationJsonExplanation;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonExplanation = DeletePolicyModule200ApplicationJsonExplanation;
var DeletePolicyModule200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonMetrics, _super);
    function DeletePolicyModule200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], DeletePolicyModule200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return DeletePolicyModule200ApplicationJsonMetrics;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonMetrics = DeletePolicyModule200ApplicationJsonMetrics;
var DeletePolicyModule200ApplicationJsonProvenance = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJsonProvenance, _super);
    function DeletePolicyModule200ApplicationJsonProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_commit" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonProvenance.prototype, "buildCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_hostname" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonProvenance.prototype, "buildHostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_timestamp" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonProvenance.prototype, "buildTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bundles" }),
        __metadata("design:type", Object)
    ], DeletePolicyModule200ApplicationJsonProvenance.prototype, "bundles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DeletePolicyModule200ApplicationJsonProvenance.prototype, "version", void 0);
    return DeletePolicyModule200ApplicationJsonProvenance;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJsonProvenance = DeletePolicyModule200ApplicationJsonProvenance;
var DeletePolicyModule200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePolicyModule200ApplicationJson, _super);
    function DeletePolicyModule200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explanation", elemType: DeletePolicyModule200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], DeletePolicyModule200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics" }),
        __metadata("design:type", DeletePolicyModule200ApplicationJsonMetrics)
    ], DeletePolicyModule200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provenance" }),
        __metadata("design:type", DeletePolicyModule200ApplicationJsonProvenance)
    ], DeletePolicyModule200ApplicationJson.prototype, "provenance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], DeletePolicyModule200ApplicationJson.prototype, "result", void 0);
    return DeletePolicyModule200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModule200ApplicationJson = DeletePolicyModule200ApplicationJson;
var DeletePolicyModuleRequest = /** @class */ (function (_super) {
    __extends(DeletePolicyModuleRequest, _super);
    function DeletePolicyModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePolicyModulePathParams)
    ], DeletePolicyModuleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePolicyModuleQueryParams)
    ], DeletePolicyModuleRequest.prototype, "queryParams", void 0);
    return DeletePolicyModuleRequest;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModuleRequest = DeletePolicyModuleRequest;
var DeletePolicyModuleResponse = /** @class */ (function (_super) {
    __extends(DeletePolicyModuleResponse, _super);
    function DeletePolicyModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundred)
    ], DeletePolicyModuleResponse.prototype, "fourHundred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundredAndFour)
    ], DeletePolicyModuleResponse.prototype, "fourHundredAndFour", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeletePolicyModuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeletePolicyModuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePolicyModule200ApplicationJson)
    ], DeletePolicyModuleResponse.prototype, "deletePolicyModule200ApplicationJSONObject", void 0);
    return DeletePolicyModuleResponse;
}(utils_1.SpeakeasyBase));
exports.DeletePolicyModuleResponse = DeletePolicyModuleResponse;
