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
exports.GetDocumentResponse = exports.GetDocumentRequest = exports.GetDocument200ApplicationJson = exports.GetDocument200ApplicationJsonProvenance = exports.GetDocument200ApplicationJsonMetrics = exports.GetDocument200ApplicationJsonExplanation = exports.GetDocument200ApplicationJsonExplanationTypeEnum = exports.GetDocument200ApplicationJsonExplanationOpEnum = exports.GetDocument200ApplicationJsonExplanationNode = exports.GetDocument200ApplicationJsonExplanationNodeTerms = exports.GetDocument200ApplicationJsonExplanationLocals = exports.GetDocument200ApplicationJsonExplanationLocalsValue = exports.GetDocument200ApplicationJsonExplanationLocalsKey = exports.GetDocumentQueryParams = exports.GetDocumentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDocumentPathParams = /** @class */ (function (_super) {
    __extends(GetDocumentPathParams, _super);
    function GetDocumentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetDocumentPathParams.prototype, "path", void 0);
    return GetDocumentPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDocumentPathParams = GetDocumentPathParams;
var GetDocumentQueryParams = /** @class */ (function (_super) {
    __extends(GetDocumentQueryParams, _super);
    function GetDocumentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=explain" }),
        __metadata("design:type", String)
    ], GetDocumentQueryParams.prototype, "explain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=input" }),
        __metadata("design:type", Object)
    ], GetDocumentQueryParams.prototype, "input", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=instrument" }),
        __metadata("design:type", Boolean)
    ], GetDocumentQueryParams.prototype, "instrument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", Boolean)
    ], GetDocumentQueryParams.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pretty" }),
        __metadata("design:type", Boolean)
    ], GetDocumentQueryParams.prototype, "pretty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=provenance" }),
        __metadata("design:type", Boolean)
    ], GetDocumentQueryParams.prototype, "provenance", void 0);
    return GetDocumentQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDocumentQueryParams = GetDocumentQueryParams;
var GetDocument200ApplicationJsonExplanationLocalsKey = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonExplanationLocalsKey, _super);
    function GetDocument200ApplicationJsonExplanationLocalsKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanationLocalsKey.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanationLocalsKey.prototype, "value", void 0);
    return GetDocument200ApplicationJsonExplanationLocalsKey;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonExplanationLocalsKey = GetDocument200ApplicationJsonExplanationLocalsKey;
var GetDocument200ApplicationJsonExplanationLocalsValue = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonExplanationLocalsValue, _super);
    function GetDocument200ApplicationJsonExplanationLocalsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanationLocalsValue.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanationLocalsValue.prototype, "value", void 0);
    return GetDocument200ApplicationJsonExplanationLocalsValue;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonExplanationLocalsValue = GetDocument200ApplicationJsonExplanationLocalsValue;
var GetDocument200ApplicationJsonExplanationLocals = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonExplanationLocals, _super);
    function GetDocument200ApplicationJsonExplanationLocals() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", GetDocument200ApplicationJsonExplanationLocalsKey)
    ], GetDocument200ApplicationJsonExplanationLocals.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", GetDocument200ApplicationJsonExplanationLocalsValue)
    ], GetDocument200ApplicationJsonExplanationLocals.prototype, "value", void 0);
    return GetDocument200ApplicationJsonExplanationLocals;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonExplanationLocals = GetDocument200ApplicationJsonExplanationLocals;
var GetDocument200ApplicationJsonExplanationNodeTerms = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonExplanationNodeTerms, _super);
    function GetDocument200ApplicationJsonExplanationNodeTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanationNodeTerms.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanationNodeTerms.prototype, "value", void 0);
    return GetDocument200ApplicationJsonExplanationNodeTerms;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonExplanationNodeTerms = GetDocument200ApplicationJsonExplanationNodeTerms;
// GetDocument200ApplicationJsonExplanationNode
/**
 * The AST element associated with the evaluation step.
 * https://godoc.org/github.com/open-policy-agent/opa/ast - AST
**/
var GetDocument200ApplicationJsonExplanationNode = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonExplanationNode, _super);
    function GetDocument200ApplicationJsonExplanationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonExplanationNode.prototype, "index", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terms", elemType: GetDocument200ApplicationJsonExplanationNodeTerms }),
        __metadata("design:type", Array)
    ], GetDocument200ApplicationJsonExplanationNode.prototype, "terms", void 0);
    return GetDocument200ApplicationJsonExplanationNode;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonExplanationNode = GetDocument200ApplicationJsonExplanationNode;
var GetDocument200ApplicationJsonExplanationOpEnum;
(function (GetDocument200ApplicationJsonExplanationOpEnum) {
    GetDocument200ApplicationJsonExplanationOpEnum["Enter"] = "enter";
    GetDocument200ApplicationJsonExplanationOpEnum["Exit"] = "exit";
    GetDocument200ApplicationJsonExplanationOpEnum["Eval"] = "eval";
    GetDocument200ApplicationJsonExplanationOpEnum["Fail"] = "fail";
    GetDocument200ApplicationJsonExplanationOpEnum["Redo"] = "redo";
})(GetDocument200ApplicationJsonExplanationOpEnum = exports.GetDocument200ApplicationJsonExplanationOpEnum || (exports.GetDocument200ApplicationJsonExplanationOpEnum = {}));
var GetDocument200ApplicationJsonExplanationTypeEnum;
(function (GetDocument200ApplicationJsonExplanationTypeEnum) {
    GetDocument200ApplicationJsonExplanationTypeEnum["Expr"] = "expr";
    GetDocument200ApplicationJsonExplanationTypeEnum["Rule"] = "rule";
    GetDocument200ApplicationJsonExplanationTypeEnum["Body"] = "body";
})(GetDocument200ApplicationJsonExplanationTypeEnum = exports.GetDocument200ApplicationJsonExplanationTypeEnum || (exports.GetDocument200ApplicationJsonExplanationTypeEnum = {}));
var GetDocument200ApplicationJsonExplanation = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonExplanation, _super);
    function GetDocument200ApplicationJsonExplanation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locals", elemType: GetDocument200ApplicationJsonExplanationLocals }),
        __metadata("design:type", Array)
    ], GetDocument200ApplicationJsonExplanation.prototype, "locals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node" }),
        __metadata("design:type", GetDocument200ApplicationJsonExplanationNode)
    ], GetDocument200ApplicationJsonExplanation.prototype, "node", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanation.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_id" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonExplanation.prototype, "parentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query_id" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonExplanation.prototype, "queryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonExplanation.prototype, "type", void 0);
    return GetDocument200ApplicationJsonExplanation;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonExplanation = GetDocument200ApplicationJsonExplanation;
var GetDocument200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonMetrics, _super);
    function GetDocument200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=counter_server_query_cache_hit" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "counterServerQueryCacheHit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_build_comprehension_index_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageBuildComprehensionIndexNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_safety_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckSafetyNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_types_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckTypesNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_undefined_funcs_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUndefinedFuncsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_check_unsafe_builtins_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageCheckUnsafeBuiltinsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_resolve_refs_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageResolveRefsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_comprehension_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteComprehensionTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_dynamic_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteDynamicTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_expr_terms_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteExprTermsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_local_vars_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteLocalVarsNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_to_capture_value_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteToCaptureValueNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_query_compile_stage_rewrite_with_values_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerQueryCompileStageRewriteWithValuesNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_input_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerRegoInputParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_module_compile_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerRegoModuleCompileNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_module_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerRegoModuleParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_compile_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerRegoQueryCompileNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_eval_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerRegoQueryEvalNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_rego_query_parse_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerRegoQueryParseNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_server_handler_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerServerHandlerNs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timer_server_read_bytes_ns" }),
        __metadata("design:type", Number)
    ], GetDocument200ApplicationJsonMetrics.prototype, "timerServerReadBytesNs", void 0);
    return GetDocument200ApplicationJsonMetrics;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonMetrics = GetDocument200ApplicationJsonMetrics;
var GetDocument200ApplicationJsonProvenance = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJsonProvenance, _super);
    function GetDocument200ApplicationJsonProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_commit" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonProvenance.prototype, "buildCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_hostname" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonProvenance.prototype, "buildHostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_timestamp" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonProvenance.prototype, "buildTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bundles" }),
        __metadata("design:type", Object)
    ], GetDocument200ApplicationJsonProvenance.prototype, "bundles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GetDocument200ApplicationJsonProvenance.prototype, "version", void 0);
    return GetDocument200ApplicationJsonProvenance;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJsonProvenance = GetDocument200ApplicationJsonProvenance;
var GetDocument200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDocument200ApplicationJson, _super);
    function GetDocument200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=explanation", elemType: GetDocument200ApplicationJsonExplanation }),
        __metadata("design:type", Array)
    ], GetDocument200ApplicationJson.prototype, "explanation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metrics" }),
        __metadata("design:type", GetDocument200ApplicationJsonMetrics)
    ], GetDocument200ApplicationJson.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provenance" }),
        __metadata("design:type", GetDocument200ApplicationJsonProvenance)
    ], GetDocument200ApplicationJson.prototype, "provenance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], GetDocument200ApplicationJson.prototype, "result", void 0);
    return GetDocument200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDocument200ApplicationJson = GetDocument200ApplicationJson;
var GetDocumentRequest = /** @class */ (function (_super) {
    __extends(GetDocumentRequest, _super);
    function GetDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentPathParams)
    ], GetDocumentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocumentQueryParams)
    ], GetDocumentRequest.prototype, "queryParams", void 0);
    return GetDocumentRequest;
}(utils_1.SpeakeasyBase));
exports.GetDocumentRequest = GetDocumentRequest;
var GetDocumentResponse = /** @class */ (function (_super) {
    __extends(GetDocumentResponse, _super);
    function GetDocumentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FourHundred)
    ], GetDocumentResponse.prototype, "fourHundred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDocumentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDocumentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDocument200ApplicationJson)
    ], GetDocumentResponse.prototype, "getDocument200ApplicationJSONObject", void 0);
    return GetDocumentResponse;
}(utils_1.SpeakeasyBase));
exports.GetDocumentResponse = GetDocumentResponse;
