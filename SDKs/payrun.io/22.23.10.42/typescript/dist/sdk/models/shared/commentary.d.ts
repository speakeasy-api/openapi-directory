import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The commentarys' employee
 */
export declare class CommentaryCommentaryEmployee extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The commentarys' pay run
 */
export declare class CommentaryCommentaryPayRun extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
export declare class CommentaryCommentary extends SpeakeasyBase {
    /**
     * The commentarys' created
     */
    created?: Date;
    /**
     * The commentarys' detail
     */
    detail?: string;
    /**
     * The commentarys' employee
     */
    employee?: CommentaryCommentaryEmployee;
    /**
     * The commentarys' pay run
     */
    payRun?: CommentaryCommentaryPayRun;
}
/**
 * The commentary object.
 */
export declare class Commentary extends SpeakeasyBase {
    commentary?: CommentaryCommentary;
}
