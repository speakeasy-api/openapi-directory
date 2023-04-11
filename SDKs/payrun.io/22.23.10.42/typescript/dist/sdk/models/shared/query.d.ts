import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryQueryGroupGroupCondition extends SpeakeasyBase {
    /**
     * The compare condition bases' value a
     */
    atValueA?: string;
    /**
     * The compare condition bases' value b
     */
    atValueB?: string;
}
export declare class QueryQueryGroupGroupFilter extends SpeakeasyBase {
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
export declare class QueryQueryGroupGroupOrder extends SpeakeasyBase {
    /**
     * The order by bases' property
     */
    atProperty?: string;
}
/**
 * The output bases' output
 */
export declare enum QueryQueryGroupGroupOutputAtOutputEnum {
    Element = "Element",
    Attribute = "Attribute",
    Variable = "Variable",
    VariableSum = "VariableSum",
    VariableAppend = "VariableAppend",
    VariablePrepend = "VariablePrepend",
    ElementDatePart = "ElementDatePart",
    InnerText = "InnerText"
}
export declare class QueryQueryGroupGroupOutput extends SpeakeasyBase {
    /**
     * The output bases' max length
     */
    atMaxLength?: string;
    /**
     * The output bases' output
     */
    atOutput?: QueryQueryGroupGroupOutputAtOutputEnum;
}
export declare class QueryQueryGroupGroup extends SpeakeasyBase {
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
    condition?: QueryQueryGroupGroupCondition[];
    /**
     * The entity groups' filters
     */
    filter?: QueryQueryGroupGroupFilter[];
    /**
     * The entity groups' ordering
     */
    order?: QueryQueryGroupGroupOrder[];
    /**
     * The entity groups' outputs
     */
    output?: QueryQueryGroupGroupOutput[];
}
/**
 * The querys' groups
 */
export declare class QueryQueryGroup extends SpeakeasyBase {
    group?: QueryQueryGroupGroup[];
}
export declare class QueryQueryVariableVariable extends SpeakeasyBase {
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
export declare class QueryQueryVariable extends SpeakeasyBase {
    variable?: QueryQueryVariableVariable[];
}
export declare class QueryQuery extends SpeakeasyBase {
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
    groups?: QueryQueryGroup;
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
    variables?: QueryQueryVariable;
}
/**
 * The query object to be executed against the application data.
 */
export declare class Query extends SpeakeasyBase {
    query?: QueryQuery;
}
