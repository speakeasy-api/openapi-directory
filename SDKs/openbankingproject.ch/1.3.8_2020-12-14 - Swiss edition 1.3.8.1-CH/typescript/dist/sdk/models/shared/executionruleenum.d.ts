/**
 * "following" or "preceding" supported as values.
 *
 * @remarks
 * This data attribute defines the behaviour when recurring payment dates falls on a weekend or bank holiday.
 * The payment is then executed either the "preceding" or "following" working day.
 * ASPSP might reject the request due to the communicated value, if rules in Online-Banking are not supporting
 * this execution rule.
 *
 */
export declare enum ExecutionRuleEnum {
    Following = "following",
    Preceding = "preceding"
}
