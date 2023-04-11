/**
 * **specifier** of the order in which to return reviews
 *
 * @remarks
 *
 * Sort order options:
 *
 *   - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average
 *   - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average
 *   - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review
 *
 */
export declare enum SortOrderREVIEWEnum {
    ReviewRatingA = "REVIEW_RATING_A",
    ReviewRatingD = "REVIEW_RATING_D",
    ReviewRatingSubmissionDateD = "REVIEW_RATING_SUBMISSION_DATE_D"
}
