import { SpeakeasyBase } from "../../../internal/utils";
import { CommuteInfo } from "./commuteinfo";
import { Job } from "./job";
/**
 * Job entry with metadata inside SearchJobsResponse.
 */
export declare class MatchingJob extends SpeakeasyBase {
    /**
     * Commute details related to this job.
     */
    commuteInfo?: CommuteInfo;
    /**
     * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
     */
    job?: Job;
    /**
     * A summary of the job with core information that's displayed on the search results listing page.
     */
    jobSummary?: string;
    /**
     * Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.
     */
    jobTitleSnippet?: string;
    /**
     * Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.
     */
    searchTextSnippet?: string;
}
