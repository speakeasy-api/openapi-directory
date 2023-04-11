/**
 * The strategy you want to use for matching:
 *
 * @remarks
 *
 *
 * * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
 * * `1` - Search for numbers that contain `pattern`
 * * `2` - Search for numbers that end with `pattern`
 *
 */
export declare enum SearchPatternEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
