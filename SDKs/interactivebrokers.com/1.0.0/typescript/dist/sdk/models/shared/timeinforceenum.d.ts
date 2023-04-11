/**
 * Defines order's active lifetime.
 *
 * @remarks
 * Day = '0'
 * GTC (Good till Cancel) = '1'
 * IOC (Immediate or Cancel) = '3'
 * Open = '2'
 * Close = '7'
 *
 */
export declare enum TimeInForceEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Seven = "7"
}
