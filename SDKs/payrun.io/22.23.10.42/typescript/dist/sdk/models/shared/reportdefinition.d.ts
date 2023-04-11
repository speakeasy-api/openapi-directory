import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportDefinitionReportDefinitionReportQueryGroupGroupCondition extends SpeakeasyBase {
    /**
     * The compare condition bases' value a
     */
    atValueA?: string;
    /**
     * The compare condition bases' value b
     */
    atValueB?: string;
}
export declare class ReportDefinitionReportDefinitionReportQueryGroupGroupFilter extends SpeakeasyBase {
    /**
     * The filter bases' is or
     */
    atIsOr?: boolean;
    /**
     * The filter bases' property
     */
    atProperty?: string;
    /**
     * The filter bases' value
     */
    atValue?: string;
}
export declare class ReportDefinitionReportDefinitionReportQueryGroupGroupOrder extends SpeakeasyBase {
    /**
     * The order by bases' property
     */
    atProperty?: string;
}
/**
 * The output bases' output
 */
export declare enum ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum {
    Element = "Element",
    Attribute = "Attribute",
    Variable = "Variable",
    VariableSum = "VariableSum",
    VariableAppend = "VariableAppend",
    VariablePrepend = "VariablePrepend",
    ElementDatePart = "ElementDatePart",
    InnerText = "InnerText"
}
export declare class ReportDefinitionReportDefinitionReportQueryGroupGroupOutput extends SpeakeasyBase {
    /**
     * The output bases' max length
     */
    atMaxLength?: string;
    /**
     * The output bases' output
     */
    atOutput?: ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnum;
}
export declare class ReportDefinitionReportDefinitionReportQueryGroupGroup extends SpeakeasyBase {
    /**
     * The entity groups' group name
     */
    atGroupName?: string;
    /**
     * The entity groups' item name
     */
    atItemName?: string;
    /**
     * The entity groups' loop expression
     */
    atLoopExpression?: string;
    /**
     * The entity groups' predicate
     */
    atPredicate?: string;
    /**
     * The entity groups' selector
     */
    atSelector?: string;
    /**
     * The entity groups' unique key variable
     */
    atUniqueKeyVariable?: string;
    /**
     * The entity groups' conditions
     */
    condition?: ReportDefinitionReportDefinitionReportQueryGroupGroupCondition[];
    /**
     * The entity groups' filters
     */
    filter?: ReportDefinitionReportDefinitionReportQueryGroupGroupFilter[];
    /**
     * The entity groups' ordering
     */
    order?: ReportDefinitionReportDefinitionReportQueryGroupGroupOrder[];
    /**
     * The entity groups' outputs
     */
    output?: ReportDefinitionReportDefinitionReportQueryGroupGroupOutput[];
}
/**
 * The querys' groups
 */
export declare class ReportDefinitionReportDefinitionReportQueryGroup extends SpeakeasyBase {
    group?: ReportDefinitionReportDefinitionReportQueryGroupGroup[];
}
export declare class ReportDefinitionReportDefinitionReportQueryVariableVariable extends SpeakeasyBase {
    /**
     * The name value pairs' name
     */
    atName?: string;
    /**
     * The name value pairs' value
     */
    atValue?: string;
}
/**
 * The querys' variables
 */
export declare class ReportDefinitionReportDefinitionReportQueryVariable extends SpeakeasyBase {
    variable?: ReportDefinitionReportDefinitionReportQueryVariableVariable[];
}
/**
 * The report definitions' report query
 */
export declare class ReportDefinitionReportDefinitionReportQuery extends SpeakeasyBase {
    /**
     * The querys' encoding
     */
    encoding?: string;
    /**
     * The querys' exclude null or empty elements
     */
    excludeNullOrEmptyElements?: boolean;
    /**
     * The querys' groups
     */
    groups?: ReportDefinitionReportDefinitionReportQueryGroup;
    /**
     * The querys' root node name
     */
    rootNodeName?: string;
    /**
     * The querys' suppress metric attributes
     */
    suppressMetricAttributes?: boolean;
    /**
     * The querys' variables
     */
    variables?: ReportDefinitionReportDefinitionReportQueryVariable;
}
export declare class ReportDefinitionReportDefinition extends SpeakeasyBase {
    /**
     * The report definitions' active
     */
    active?: boolean;
    /**
     * The report definitions' readonly
     */
    readonly?: boolean;
    /**
     * The report definitions' report query
     */
    reportQuery?: ReportDefinitionReportDefinitionReportQuery;
    /**
     * The report definitions' supported transforms
     */
    supportedTransforms?: string;
    /**
     * The report definitions' title
     */
    title?: string;
    /**
     * The report definitions' version
     */
    version?: string;
}
/**
 * The report definition object.
 */
export declare class ReportDefinition extends SpeakeasyBase {
    reportDefinition?: ReportDefinitionReportDefinition;
}
