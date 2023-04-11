import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableInterfaceFormFactorEnum {
    Zero = "0",
    TwoHundred = "200",
    EightHundred = "800",
    OneThousand = "1000",
    OneThousandOneHundredAndFifty = "1150",
    OneThousandOneHundredAndSeventy = "1170",
    OneThousandAndFifty = "1050",
    OneThousandOneHundred = "1100",
    OneThousandTwoHundred = "1200",
    OneThousandThreeHundred = "1300",
    OneThousandThreeHundredAndTen = "1310",
    OneThousandThreeHundredAndTwenty = "1320",
    OneThousandThreeHundredAndFifty = "1350",
    OneThousandFourHundred = "1400",
    OneThousandFiveHundred = "1500",
    OneThousandFiveHundredAndTen = "1510",
    OneThousandFiveHundredAndTwenty = "1520",
    OneThousandFiveHundredAndFifty = "1550",
    OneThousandSixHundred = "1600",
    TwoThousandSixHundred = "2600",
    TwoThousandSixHundredAndTen = "2610",
    TwoThousandSixHundredAndTwenty = "2620",
    TwoThousandSixHundredAndThirty = "2630",
    TwoThousandSixHundredAndForty = "2640",
    SixThousandOneHundred = "6100",
    SixThousandTwoHundred = "6200",
    SixThousandThreeHundred = "6300",
    SixThousandFourHundred = "6400",
    SixThousandFiveHundred = "6500",
    SixThousandSixHundred = "6600",
    SixThousandSevenHundred = "6700",
    ThreeThousandAndTen = "3010",
    ThreeThousandAndTwenty = "3020",
    ThreeThousandAndForty = "3040",
    ThreeThousandAndEighty = "3080",
    ThreeThousandOneHundredAndSixty = "3160",
    ThreeThousandThreeHundredAndTwenty = "3320",
    FourThousand = "4000",
    FourThousandAndTen = "4010",
    FourThousandAndForty = "4040",
    FourThousandAndFifty = "4050",
    FiveThousand = "5000",
    FiveThousandAndFifty = "5050",
    FiveThousandOneHundred = "5100",
    FiveThousandOneHundredAndFifty = "5150",
    FiveThousandTwoHundred = "5200",
    FiveThousandThreeHundred = "5300",
    FiveThousandThreeHundredAndTen = "5310",
    FiveThousandThreeHundredAndTwenty = "5320",
    FiveThousandThreeHundredAndThirty = "5330",
    ThirtyTwoThousandSevenHundredAndSixtySeven = "32767"
}
export declare enum WritableInterfaceModeEnum {
    OneHundred = "100",
    TwoHundred = "200",
    ThreeHundred = "300"
}
export declare class WritableInterfaceInput extends SpeakeasyBase {
    circuitTermination: number;
    description?: string;
    device: number;
    enabled?: boolean;
    formFactor?: WritableInterfaceFormFactorEnum;
    lag?: number;
    macAddress?: string;
    /**
     * This interface is used only for out-of-band management
     */
    mgmtOnly?: boolean;
    mode?: WritableInterfaceModeEnum;
    mtu?: number;
    name: string;
    taggedVlans?: number[];
    tags?: string[];
    untaggedVlan?: number;
}
